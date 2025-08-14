import EmailSvg from "@/assets/images/login/email.svg?react";
import LockSvg from "@/assets/images/login/lock.svg?react";
import CheckboxSvg from "@/assets/images/login/checkbox.svg?react";
import TickBoxSvg from "@/assets/images/login/tickBox.svg?react";
import UserSvg from "@/assets/images/login/user.svg?react";
import BlackInfoCircleSvg from "@/assets/images/login/black-infoCircle.svg?react";
import OpenMindButton from "@/components/common/Button";
import { useState, useMemo } from "react";
import InputField from "@/components/common/input";
import { Link, useNavigate } from "react-router-dom";
import LoginFormItem from "@/components/login/LoginFormItem";
import { message, Tooltip } from "antd";
import { useSignUp } from "@clerk/clerk-react";
import HaveAnAccount from "@/components/login/HaveAnAccount";

interface FormDataType {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  agreed: boolean;
}

export const PasswordsDoNotMatchError = "Passwords do not match"

const SignUp = () => {
  const { signUp } = useSignUp();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  })

  const onFormItemChange = (key: keyof FormDataType, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const allFilled = useMemo(() => {
    return Object.values(formData).every((value) => {
      return typeof value === 'string'? value.trim() !== "" : value
    })
  }, [formData])

  const handleRegister = async() => {
    setLoading(true)
    const { email, fullName, password, confirmPassword } = formData

    if (password !== confirmPassword) {
      setError(PasswordsDoNotMatchError);
      setLoading(false);
      return;
    }

    try {
      // Split full name into first and last name
      const nameParts = fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      console.log("first name", firstName);
      console.log("last name", lastName);

      // Start the sign-up process - removing firstName and lastName as they're causing errors
      const signUpResult = await signUp.create({
        emailAddress: email,
        password,
        firstName,
        lastName,
      });

      console.log("Sign-up result:", signUpResult);

      const verificationResult = await signUp.prepareEmailAddressVerification({
        strategy: "email_link",
        redirectUrl: window.location.origin + "/email-verified",
      });

      console.log("Verification preparation result:", verificationResult);

      // Store information about the sign-up in progress
      localStorage.setItem("signUpInProgress", "true");
      localStorage.setItem("signUpEmail", email);
      localStorage.setItem("signUpFullName", fullName); // Store the full name for later use
      localStorage.setItem("clerkSignUpId", signUp.id || "");
      localStorage.setItem("cooldownSeconds", '60');
      navigate('/email-verified')
    } catch (err: unknown) {
      console.log('Sign up error', err);
      const errorObj = err as { errors?: Array<{ message: string, longMessage: string }> };
      message.error(errorObj.errors?.[0]?.longMessage || "An error occurred during sign up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex-col gap-[24px]">
        <LoginFormItem label="Email">
          <InputField
            placeholder="Enter email address"
            icon={EmailSvg}
            value={formData.email}
            onChange={(e) => onFormItemChange('email', e.target.value)}
          />
        </LoginFormItem>
        <LoginFormItem label="Full Name">
          <InputField
            placeholder="Enter Your Name"
            icon={UserSvg}
            value={formData.fullName}
            onChange={(e) => onFormItemChange('fullName', e.target.value)}
          />
        </LoginFormItem>
        <LoginFormItem
          label="Password"
          labelSuffix={(
            <Tooltip title='Passwords must be 8 characters or more.'>
              <div className="w-[16px] h-[16px] cursor-pointer opacity-[30%] hover:opacity-[100%] duration-300"><BlackInfoCircleSvg /></div>
            </Tooltip>
          )}
        >
          <InputField
            type="password"
            placeholder="Enter password"
            icon={LockSvg}
            value={formData.password}
            onChange={(e) => onFormItemChange('password', e.target.value)}
            error={error === PasswordsDoNotMatchError}
          />
        </LoginFormItem>
        <LoginFormItem label="Confirm Password">
          <InputField
            type="password"
            placeholder="Re-enter password"
            icon={LockSvg}
            value={formData.confirmPassword}
            onChange={(e) => onFormItemChange('confirmPassword', e.target.value)}
            error={error === PasswordsDoNotMatchError}
          />
          {error && (
            <div className="text-[14px] text-error">*{PasswordsDoNotMatchError}</div>
          )}
        </LoginFormItem>
      </div>

      <div className="flex items-center gap-[8px] cursor-pointer my-[24px]" onClick={() => onFormItemChange('agreed', !formData.agreed)}>
        <div className="w-[20px] h-[20px]">
          {formData.agreed ? <TickBoxSvg /> : <CheckboxSvg />}
        </div>
        <div className="text-[14px] leading-[20px] text-[#0E121B]">
          I Agree to the term condition & Privacy Policy
        </div>
      </div>

      <OpenMindButton disabled={!allFilled} size="xl" block loading={loading} onClick={handleRegister}>Register</OpenMindButton>
      
      <HaveAnAccount />
    </>
  );
}

export default SignUp;
