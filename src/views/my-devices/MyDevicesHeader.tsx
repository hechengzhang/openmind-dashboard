import LinkSvg from "@/assets/images/my-devices/link.svg?react"
import OpenMindButton from "@/components/common/Button"

const MyDevicesHeader = () => {
  return (
    <div className="flex justify-between items-center mb-[32px]">
      <div>
        <div className="font-primary text-[24px] font-[700] mb-[4px]">My Machines on FABRIC</div>
        <div className="text-[14px] leading-[20px] tracking-[-0.006em]">Deploy your robots on FABRIC</div>
      </div>
      <OpenMindButton type='blue' size="large" onClick={() => window.open('https://portal.openmind.org/')} className="link-device-btn">
        <div className="w-[20px] h-[20px]">
          <LinkSvg />
        </div>
        <span>Link A Device</span>
      </OpenMindButton>
    </div>
  )
}

export default MyDevicesHeader