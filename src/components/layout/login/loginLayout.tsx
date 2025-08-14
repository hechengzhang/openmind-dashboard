import Scrollbar from "../../common/Scrollbar"
import BgImage from '@/assets/images/login/bg.png'
import LooginFooter from "./loginFooter"
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import LoginPageContainer from "@/components/login/LoginPageContainer";

const LoginLayout = ({ children } : { children: React.ReactNode }) => {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return <Navigate to='/openmind/' replace />;
  }
  
  return (
    <div className="w-full h-[100dvh] relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.02]" style={{ backgroundImage: `url(${BgImage})` }} />
      <div className="w-full h-full relative z-[2]">
        <Scrollbar>
          <LoginPageContainer>
            {children}
          </LoginPageContainer>
        </Scrollbar>
      </div>
      <LooginFooter />
    </div>
  )
}

export default LoginLayout