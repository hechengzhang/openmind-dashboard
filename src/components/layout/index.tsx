import { useLocation } from "react-router-dom";
import LoginLayout from "./login/loginLayout";
import { ReactNode, useMemo } from "react";
import LoginedLayout from "./logined";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const isLoginPages = useMemo(() => {
    return ['/sign-in', '/sign-in/sso-callback', '/sign-up', '/sign-up/sso-callback', '/email-verified', '/forgot-password', '/reset-password'].includes(location.pathname);
  }, [location]);

  return (
    <>
      {isLoginPages ? (
        <LoginLayout>{children}</LoginLayout>
      ) : (
        <LoginedLayout>{children}</LoginedLayout>
      )}
    </>
  )
};

export default Layout