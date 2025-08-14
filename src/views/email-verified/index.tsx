import OpenMindButton from "@/components/common/Button"
import EmailSendingSvg from "@/assets/images/login/emailSending.svg?react"
import { useCallback, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { message } from "antd"
import { useSignIn, useSignUp } from "@clerk/clerk-react"
import HaveAnAccount from "@/components/login/HaveAnAccount"

const EmailVerified = () => {
  const { signUp } = useSignUp();
  const { setActive } = useSignIn();
  const navigate = useNavigate();
  const [formSubmitted] = useState(() => {
    const signUpInProgress = localStorage.getItem("signUpInProgress");
    return signUpInProgress === "true";
  });
  const [storedEmail] = useState(() => localStorage.getItem("signUpEmail"));
  const [signUpId] = useState(() => localStorage.getItem("clerkSignUpId"));
  const [cooldownSeconds, setCooldownSeconds] = useState<number>(() => {
    const cooldown = localStorage.getItem("cooldownSeconds");
    return cooldown ? parseInt(cooldown) : 60;
  });

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (cooldownSeconds > 0) {
      localStorage.setItem("cooldownSeconds", `${cooldownSeconds}`);
      timer = setInterval(() => {
        setCooldownSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [cooldownSeconds]);

  const checkVerificationStatus = useCallback(async () => {
    try {
      if (signUp && signUp.id === signUpId) {
        try {
          await signUp.reload();
        } catch (reloadError) {
          console.error("Error reloading sign-up state:", reloadError);
        }

        const status = signUp.status;
        console.log("Current sign-up status:", status);

        if (status === "complete") {
          localStorage.removeItem("signUpInProgress");
          localStorage.removeItem("signUpEmail");
          localStorage.removeItem("signUpFullName");
          localStorage.removeItem("clerkSignUpId");

          if (setActive) {
            await setActive({ session: signUp.createdSessionId });
            navigate('/')
          } else {
            window.location.reload();
          }
        }
      }
    } catch (error) {
      console.error("Error checking verification status:", error);
    }
  }, [signUp, setActive]);

  useEffect(() => {
    if (formSubmitted) {
      checkVerificationStatus();
      const intervalId = setInterval(checkVerificationStatus, 3000);
      return () => clearInterval(intervalId);
    }
  }, [formSubmitted, checkVerificationStatus]);

  const resendEmail = async() => {
    setCooldownSeconds(60)

    try {
      if (!signUpId || !storedEmail) {
        message.error("Unable to resend verification email. Please try signing up again.");
        return;
      }

      // If you have a signUp instance
      if (signUp && signUp.id === signUpId) {
        await signUp.prepareEmailAddressVerification({
          strategy: "email_link",
          redirectUrl: window.location.origin + '/email-verified',
        });

        message.success("Verification email resent! Please check your inbox.");

        // Start the cooldown
        setCooldownSeconds(60);
      } else {
        message.error("Session expired. Please try signing up again.");
      }
    } catch (err) {
      console.error("Error resending verification:", err);
      const errorObj = err as { errors?: Array<{ message: string, longMessage?: string }> };
      message.error(errorObj.errors?.[0]?.longMessage || "Failed to resend verification email");
      if (errorObj.errors?.[0]?.message === "Invalid authentication") {
        window.location.reload();
      }
    }
  }

  if (!formSubmitted || !storedEmail) {
    return <Navigate to='/sign-up' replace />;
  }

  return (
    <>
      <div className="flex-row-center mb-[28px]">
        <div className="w-[64px] h-[64px]">
          <EmailSendingSvg />
        </div>
      </div>
      <div className="mb-[50px] flex-col-center">
        <div className="text-[20px] font-[700] text-primary font-primary mb-[30px]">Email Sent</div>
        <div className="text-[16px] font-[500] leading-[150%] text-primary py-[8px] px-[16px] bg-[#F3F5F7] rounded-[20px] mb-[18px]">{storedEmail}</div>
        <div className="px-[40px] text-[14px] text-secondary text-center">Please check your email for a verification link to complete your sign-up.</div>
      </div>

      <OpenMindButton disabled={cooldownSeconds > 0} size="xl" block onClick={resendEmail}>
        {cooldownSeconds > 0 ? `Resend available in ${cooldownSeconds}s` : "Resend Email"}
      </OpenMindButton>

      <HaveAnAccount/>
    </>
  )
}

export default EmailVerified
