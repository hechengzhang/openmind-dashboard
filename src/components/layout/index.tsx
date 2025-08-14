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
    return ['/sign-in', '/sign-in/sso-callback', '/sign-up', '/sign-up/sso-callback', '/email-verified', '/forgot-password', '/reset-password'].includes(location.pathname);
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