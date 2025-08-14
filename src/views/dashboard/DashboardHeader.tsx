import HelloSvg from "@/assets/images/dashboard/hello.svg?react"
import LinkSvg from "@/assets/images/my-devices/link.svg?react"
import DownloadSvg from "@/assets/images/dashboard/download.svg?react"
import { useUser } from "@clerk/clerk-react"
import OpenMindButton from "@/components/common/Button"

const DashboardHeader = () => {
  const { user } = useUser()
  return (
    <div className="flex justify-between mb-[30px]">
      <div className="flex items-center gap-[6px]">
        <div className="font-primary text-[28px] font-[700] text-primary text-ellipsis">Welcome back, {user?.fullName}</div>
        <div className="w-[28px] h-[28px]"><HelloSvg /></div>
      </div>
      <div className="flex gap-[16px]">
        <OpenMindButton type='white' size="large">
          <div className="w-[20px] h-[20px]">
            <DownloadSvg />
          </div>
          <span>Extensions</span>
        </OpenMindButton>
        <OpenMindButton type='blue' size="large" onClick={() => window.open('https://portal.openmind.org/')}>
          <div className="w-[20px] h-[20px]">
            <LinkSvg />
          </div>
          <span>Link A Device</span>
        </OpenMindButton>
      </div>
    </div>
  )
}

export default DashboardHeader