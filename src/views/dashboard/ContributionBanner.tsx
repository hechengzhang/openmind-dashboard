import ArrowRightSvg from "@/assets/images/dashboard/arrow-right.svg?react"
import BlueLogoImage from "@/assets/images/dashboard/blue-logo.png"
import ButtonBgImage from "@/assets/images/dashboard/button-bg.png"

const ContributionBanner = () => {
  return (
    <div className="relative flex justify-between px-[32px] py-[24px] bg-white rounded-[20px] overflow-hidden">
      <div className="z-[1]">
        <div className="font-primary text-[24px] font-[700] text-primary mb-[10px]">CONTRIBUTING TO <br /> A GLOBAL MACHINE NETWORK</div>
        <div className="max-w-[835px] text-[12px] leading-[18px] text-secondary">Every device you connect helps strengthen the threads that connect machines for the nex-gen economy. Help us create a future where robots and humans work together, based on a shared, immutable consensus about the physical world, events, identity, and capabilities.</div>
      </div>
      <div className="group relative flex items-start gap-[4px] rounded-[20px] py-[8px] pl-[16px] pr-[12px] cursor-pointer z-[1] shrink-0 self-start bg-[#F8F8F9]">
        <div className="absolute inset-0 button-gradient button-gradient opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-[20px]"></div>
        <div className="relative flex items-center gap-[4px] z-10">
          <div className="text-[14px] font-[700] text-primary">Read More</div>
          <div className="w-[24px] h-[24px]"><ArrowRightSvg /></div>
        </div>
        <div className="absolute w-[71px] h-[28px] top-[2px] right-[30px]"><img src={ButtonBgImage} alt="" /></div>
      </div>
      <div className="absolute w-[289px] h-[289px] top-[29px] right-[85px] z-[0] opacity-[60%]"><img src={BlueLogoImage} alt="" /></div>
    </div>
  )
}

export default ContributionBanner