
import GoogleSvg from "@/assets/images/login/google.svg?react"
import EmailSvg from "@/assets/images/login/email.svg?react"
import LockSvg from "@/assets/images/login/lock.svg?react"
import { useState } from "react"
import OpenMindButton from "@/components/common/Button"
import InputField from "@/components/common/input"
import { useSignIn } from "@clerk/clerk-react"
import { OAuthStrategy } from "@clerk/types";
import { Link, useNavigate } from 'react-router-dom'
import LoginFormItem from "@/components/login/LoginFormItem"
import { message } from "antd"
import NoAnAccount from "@/components/login/NoAnAccount"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const { signIn, setActive } = useSignIn()
  const navigate = useNavigate()

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sign-in/sso-callback",
      redirectUrlComplete: "/",
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
          <InputField
            placeholder="Enter email address"
            icon={EmailSvg}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LoginFormItem>
        <LoginFormItem label='Password' slot={<Link to='/forgot-password' className="text-[14px] leading-[20px] text-secondary text-hover-underline">Forgot password?</Link>}>
          <InputField
            type="password"
            placeholder="Enter password"
            icon={LockSvg}
            value={password}
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