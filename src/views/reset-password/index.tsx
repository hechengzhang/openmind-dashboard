import OpenMindButton from "@/components/common/Button";
import LoginFormItem from "@/components/login/LoginFormItem"
import { Input, Tooltip } from "antd"
import { useMemo, useState } from "react"
import { PasswordsDoNotMatchError } from "../sign-up";
import CodeSvg from "@/assets/images/login/code.svg?react";
import BlackInfoCircleSvg from "@/assets/images/login/black-infoCircle.svg?react";
import { useSignIn } from "@clerk/clerk-react";
import LoginFormTips from "@/components/login/LoginFormTips";
import HaveAnAccount from "@/components/login/HaveAnAccount";
import EmailCooldown from "./EmailCooldown";
import PasswordInput from "@/components/PasswordInput";

interface FormDataType {
  code: string;
  password: string;
  confirmPassword: string;
}

const RestPassword = () => {
  const { signIn, setActive } = useSignIn()
  const [formData, setFormData] = useState({
    code: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onFormItemChange = (key: keyof FormDataType, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const allFilled = useMemo(() => {
    return Object.values(formData).every((value) => value.trim() !== "")
  }, [formData])

  const onSubmit = async () => {
    // Reset all error messages
    setError("");
    setSuccess("");
    setLoading(true);
    const { password, confirmPassword, code } = formData
    // Check if the passwords match
    if (password !== confirmPassword) {
      setError(PasswordsDoNotMatchError);
      setLoading(false);
      return;
    }
    
    // Verify the code and reset the password
    try {
      await signIn?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      })
      .then((result) => {
        // Check if 2FA is required
        if (result.status === "needs_second_factor") {
          setError("Needs second factor. Please contact support.");
        } else if (result.status === "complete") {
          // Set the active session to
          // the newly created session (user is now signed in)
          setSuccess("Password reset successfully. Redirecting...");
          setTimeout(() => {
            setActive({ session: result.createdSessionId });
            setError("");
          }, 2000);
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        console.error("error", err.errors[0].longMessage);
        setError(err.errors[0].longMessage);
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex-col gap-[24px] mb-[32px]">
        <LoginFormItem label="Code" slot={<EmailCooldown/>}>
          <Input
            placeholder="Enter Verification Code"
            prefix={<CodeSvg />}
            value={formData.code}
            onChange={(e) => onFormItemChange('code', e.target.value)}
          />
        </LoginFormItem>
        <LoginFormItem
          label="New Password"
          labelSuffix={(
            <Tooltip title='Passwords must be 8 characters or more.'>
              <div className="w-[16px] h-[16px] cursor-pointer opacity-[30%] hover:opacity-[100%] duration-300"><BlackInfoCircleSvg /></div>
            </Tooltip>
          )}
        >
          <PasswordInput
            type="password"
            placeholder="Enter password"
            prefixIcon
            value={formData.password}
            onChange={(e) => onFormItemChange('password', e.target.value)}
            error={error === PasswordsDoNotMatchError}
          />
        </LoginFormItem>
        <LoginFormItem label="Confirm Password">
          <PasswordInput
            placeholder="Re-enter password"
            prefixIcon
            value={formData.confirmPassword}
            onChange={(e) => onFormItemChange('confirmPassword', e.target.value)}
            error={error === PasswordsDoNotMatchError}
          />
        </LoginFormItem>
        {error && (
          <LoginFormTips text={error}/>
        )}
        {success && (
          <LoginFormTips text={success} type="success" />
        )}
      </div>
      
      <OpenMindButton disabled={!allFilled} size="xl" block loading={loading} onClick={onSubmit}>Reset Password</OpenMindButton>

      <HaveAnAccount />
    </>
  )
}

export default RestPassword