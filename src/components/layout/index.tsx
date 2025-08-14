import { useLocation } from "react-router-dom";
import LoginLayout from "./login/loginLayout";
import { ReactNode, useMemo } from "react";
import LoginedLayout from "./logined";
import InitLoading from "./InitLoading";
import { useGlobalContext } from "@/context/useGlobalContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { inited } = useGlobalContext()

  const isLoginPages = useMemo(() => {
    return ['/openmind/sign-in', '/openmind/sign-in/sso-callback', '/openmind/sign-up', '/openmind/sign-up/sso-callback', '/openmind/email-verified', '/openmind/forgot-password', '/openmind/reset-password'].includes(location.pathname);
  }, [location]);

  return (
    <>
      {inited ? (
        <>
          {isLoginPages ? (
            <LoginLayout>{children}</LoginLayout>
          ) : (
            <LoginedLayout>{children}</LoginedLayout>
          )}
        </>
      ) : (
        <InitLoading />
      )}
    </>
  )
};

export default Layout