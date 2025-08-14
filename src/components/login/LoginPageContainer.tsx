import LoginLogo from "./LoginLogo"

const LoginPageContainer = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="px-[24px] pt-[64px] pb-[40px] w-[440px] bg-white rounded-[20px]">
        <LoginLogo />
        {children}
      </div>
    </div>
  )
}

export default LoginPageContainer