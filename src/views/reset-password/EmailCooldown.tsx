import { useSignIn } from "@clerk/clerk-react";
import { message } from "antd";
import { useEffect, useState } from "react"

const EmailCooldown = () => {
  const { signIn } = useSignIn()
  const [email] = useState(() => {
    const val = localStorage.getItem("reset_email");
    return val || ''
  })
  const [cooldownSeconds, setCooldownSeconds] = useState(() => {
    const val = localStorage.getItem("cooldownSeconds");
    return val? parseInt(val) : 0
  })

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
  
    if (cooldownSeconds > 0) {
      localStorage.setItem("cooldownSeconds", `${cooldownSeconds}`);
      timer = setInterval(() => {
        setCooldownSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      localStorage.removeItem("cooldownSeconds");
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [cooldownSeconds]);

  const onSendEmail = async () => {
    setCooldownSeconds(60)
    await signIn?.create({
      strategy: "reset_password_email_code",
      identifier: email,
    }).catch((err) => {
      console.error("error", err.errors[0].longMessage);
      message.error(err.errors[0].longMessage);
    });
  }

  return (
    <div className="text-center text-[14px] leading-[150%] text-secondary">
      {cooldownSeconds > 0 ? (
        <span>{`Resend available in ${cooldownSeconds}s`}</span>
      ) : (
        <>
          <span>Didn't get an email? </span>
          <span className="text-blue text-hover-underline cursor-pointer" onClick={onSendEmail}>
            Resend
          </span>
        </>
      )}
    </div>
  )
}

export default EmailCooldown