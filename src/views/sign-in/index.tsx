
import GoogleSvg from "@/assets/images/login/google.svg?react"
import EmailSvg from "@/assets/images/login/email.svg?react"
import { useState } from "react"
import OpenMindButton from "@/components/common/Button"
import { useSignIn } from "@clerk/clerk-react"
import { OAuthStrategy } from "@clerk/types";
import { Link, useNavigate } from 'react-router-dom'
import LoginFormItem from "@/components/login/LoginFormItem"
import { Input, message } from "antd"
import NoAnAccount from "@/components/login/NoAnAccount"
import PasswordInput from "@/components/PasswordInput"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const { signIn, setActive } = useSignIn()
  const navigate = useNavigate()

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: window.location.href + "/sign-in/sso-callback",
      redirectUrlComplete: window.location.href,
    });
  };

  const onEmailSignIn = async () => {
    setLoading(true);

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      console.log('email login result', result)

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      message.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex-col gap-[24px] mb-[24px]">
        <LoginFormItem label='Email'>
          <Input
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            prefix={<EmailSvg />}
          />
        </LoginFormItem>
        <LoginFormItem label='Password' slot={<Link to='/forgot-password' className="text-[14px] leading-[20px] text-secondary text-hover-underline">Forgot password?</Link>}>
          <PasswordInput
            placeholder="Enter password"
            value={password}
            prefixIcon
            onChange={(e) => setPassword(e.target.value)}
          />
        </LoginFormItem>
      </div>

      <OpenMindButton size="xl" block loading={loading} onClick={onEmailSignIn}>Login</OpenMindButton>

      <OpenMindButton size="xl" type="sencondary" block className="mt-[24px]" onClick={() => signInWith("oauth_google")}>
        <div className="w-[24px] h-[24px]">
          <GoogleSvg />
        </div>
        <span>Continue with Google</span>
      </OpenMindButton>

      <NoAnAccount />
    </>
  )
}

export default Login