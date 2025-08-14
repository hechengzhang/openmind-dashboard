import HelloSvg from "@/assets/images/dashboard/hello.svg?react"
import { useUser } from "@clerk/clerk-react"
import LinkDeviceButton from "@/components/AnimationButtons/LinkDeviceButton"
import DownloadExtensionsButton from "@/components/AnimationButtons/DownloadExtensionsButton"

const DashboardHeader = () => {
  const { user } = useUser()

  return (
    <div className="flex justify-between mb-[30px]">
      <div className="flex items-center gap-[6px]">
        <div className="font-primary text-[28px] font-[700] text-primary text-ellipsis">Welcome back, {user?.fullName}</div>
        <div className="w-[28px] h-[28px]"><HelloSvg /></div>
      </div>
      <div className="flex gap-[16px]">
        <DownloadExtensionsButton />
        <LinkDeviceButton/>
      </div>
    </div>
  )
}

export default DashboardHeader