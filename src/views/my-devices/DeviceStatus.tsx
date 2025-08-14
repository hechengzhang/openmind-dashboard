import CoinsImage from "@/assets/images/dashboard/coins.png"
import BgCoinsImage from "@/assets/images/dashboard/bg-coins.png"
import OnSvg from "@/assets/images/my-devices/on.svg?react"
import OffSvg from "@/assets/images/my-devices/off.svg?react"
import PointsIcon from "@/assets/images/my-devices/points-icon.png"
import PhoneImage from "@/assets/images/my-devices/phone.png"
import ScrollNum from "@/components/ScrollNum"

const DeviceStatus = () => {
  return (
    <div className="flex justify-between relative mt-[24px] mb-[20px] bg-white px-[32px] py-[34px] rounded-[20px] overflow-hidden">
      <div className="flex items-center gap-[48px]">
        <div>
          <div className="flex items-center gap-[8px]">
            <div className="breathing-animation"><img src={CoinsImage} alt="" /></div>
            <div className="font-primary text-[36px] font-[500] leading-[32px]">
              <ScrollNum value={8974} height={32} />
            </div>
          </div>
          <div className="text-[14px] text-secondary mt-[12px]">Points Earned</div>
        </div>
        <div className="w-[1px] h-[57px] bg-[rgba(0,0,0,0.08)]"></div>
        <div>
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px]"><img src={PointsIcon} alt="" /></div>
            <div className="font-primary text-[36px] font-[500] leading-[32px]">
              <ScrollNum value={1974} height={32} />
            </div>
          </div>
          <div className="text-[14px] text-secondary mt-[12px]">Total Credits Used</div>
        </div>
      </div>
      <div className="flex items-center mb-[28px] z-[1] py-[4px] px-[8px] bg-[#F7FAFF] rounded-[100px]">
        <div className="w-[24px] h-[24px] mr-[4px]"><img src={PhoneImage} alt="" /></div>
        <div className="text-[14px] leading-[24px] font-[500] text-primary mr-[12px] ">iPhone 14 pro</div>
        <div className="w-[14px] h-[14px] mr-[4px]"><OnSvg /></div>
        <div className="text-[12px] text-[#067647] font-[500]">ON</div>
      </div>
      <div className="absolute top-[62%] right-[76px] w-[100px] h-[100px] opacity-[30%] z-[0]"><img src={BgCoinsImage} alt="" /></div>
    </div>
  )
}

export default DeviceStatus