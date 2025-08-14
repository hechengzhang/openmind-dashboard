import PhoneImage from "@/assets/images/my-devices/phone.png"
import CoinsImage from "@/assets/images/dashboard/coins.png"
import BgCoinsImage from "@/assets/images/dashboard/bg-coins.png"
import OnSvg from "@/assets/images/my-devices/on.svg?react"
import OffSvg from "@/assets/images/my-devices/off.svg?react"
import CountUp from "@/components/common/CountUp"

const DeviceStatus = () => {
  return (
    <div className="flex items-center relative mt-[24px] mb-[20px] bg-white px-[32px] py-[34px] rounded-[20px] overflow-hidden">
      <div className="w-[190px]">
        <div className="flex items-center gap-[8px]">
          <div className="breathing-animation"><img src={CoinsImage} alt="" /></div>
          <div className="font-primary text-[36px] font-[500] leading-[27px]">
            <CountUp
              from={0}
              to={8974}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </div>
        </div>
        <div className="text-[14px] text-secondary mt-[12px]">Points Earned</div>
      </div>
      <div className="flex items-center gap-[16px] shrink-0">
        <div className="w-[64px] h-[64px]"><img src={PhoneImage} alt="" /></div>
        <div>
          <div className="text-[20px] font-[500] leading-[24px] mb-[8px]">iPhone 14 pro</div>
          <div className="flex items-center gap-[4px]">
            <div className="w-[14px] h-[14px]"><OnSvg /></div>
            <div className="text-[14px] font-[500] leading-[20px] text-[#067647]">ON</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[40px] right-[40px] w-[138px] h-[138px] opacity-[30%]"><img src={BgCoinsImage} alt="" /></div>
    </div>
  )
}

export default DeviceStatus