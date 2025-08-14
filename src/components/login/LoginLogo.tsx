import LogoImage from "@/assets/images/sidebar/logo.png"

const LoginLogo = () => {
  return (
    <div className="flex justify-center mb-[56px]">
      <div className="w-[172px] h-[32px]">
        <img src={LogoImage} />
      </div>
    </div>
  )
}

export default LoginLogo