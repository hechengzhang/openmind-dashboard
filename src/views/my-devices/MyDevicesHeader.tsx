import LinkDeviceButton from "@/components/AnimationButtons/LinkDeviceButton"

const MyDevicesHeader = () => {
  return (
    <div className="flex justify-between items-center mb-[32px]">
      <div>
        <div className="font-primary text-[24px] font-[700] mb-[4px]">My Machines on FABRIC</div>
        <div className="text-[14px] leading-[20px] tracking-[-0.006em]">Deploy your robots on FABRIC</div>
      </div>
      <LinkDeviceButton />
    </div>
  )
}

export default MyDevicesHeader