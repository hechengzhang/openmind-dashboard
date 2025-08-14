import EmailSvg from "@/assets/images/login/email.svg?react"
import { useState } from "react"
import OpenMindButton from "@/components/common/Button"
import { useNavigate } from "react-router-dom"
import { useSignIn } from "@clerk/clerk-react"
import HaveAnAccount from "@/components/login/HaveAnAccount"
import LoginFormItem from "@/components/login/LoginFormItem"
import LoginFormTips from "@/components/login/LoginFormTips"
import { Input } from "antd"

const Forgotpassword = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signIn } = useSignIn()
  const [error, setError] = useState("")

  const onSendEmail = async () => {
    setLoading(true)
    setError('')
    await signIn?.create({
      strategy: "reset_password_email_code",
      identifier: email,
    })
    .then(() => {
      localStorage.setItem("reset_email", email);
      localStorage.setItem("cooldownSeconds", '60');
      navigate('/reset-password')
    })
    .catch((err) => {
      console.error("error", err.errors[0].longMessage);
      setError(err.errors[0].longMessage);
    });
    setLoading(false)
  }

  return (
    <>
      <div className="text-center text-[20px] font-bold font-primary">Reset your password</div>
      <div className="text-center text-[14px] font-500 mt-[16px] mb-[24px] text-secondary px-[40px]">Enter your email address, and we will send you a link to resetyour password.</div>
      
      <LoginFormItem label="Email">
        <Input
          placeholder="Enter your Email"
          prefix={<EmailSvg/>}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </LoginFormItem>

      {error && (
        <LoginFormTips text={error} className="mt-[24px]" />
      )}

      <div className="mt-[24px]">
        <OpenMindButton
          size="xl"
          block
          loading={loading}
          disabled={loading}
          onClick={onSendEmail}
        >
          Send link to Email
        </OpenMindButton>
      </div>

      <HaveAnAccount />
    </>
  )
}

export default Forgotpassword
