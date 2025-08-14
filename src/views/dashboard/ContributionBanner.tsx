import BlueLogoImage from "@/assets/images/dashboard/blue-logo.png"
import ArrowRiv from '@/assets/animations/dashboard/read-more.riv'
import OpenMindRive from "@/components/OpenMindRive"
import { useRef } from "react"

const ContributionBanner = () => {
  const ref = useRef(null)

  const onHover = () => {
    ref.current?.play()
  }

  return (
    <div className="relative flex justify-between px-[32px] py-[24px] bg-white rounded-[20px] overflow-hidden mb-[40px]">
      <div className="z-[1] 3xl:mb-[90px] mb-[24px]">
        <div className="font-primary text-[24px] font-[700] text-primary mb-[20px]">CONTRIBUTING TO <br /> A GLOBAL MACHINE NETWORK</div>
        <div className="max-w-[578px] text-[12px] leading-[18px] text-secondary">Every device you connect helps strengthen the threads that connect machines for the nex-gen economy. Help us create a future where robots and humans work together, based on a shared, immutable consensus about the physical world, events, identity, and capabilities.</div>
      </div>
      <div className="group relative flex items-start gap-[4px] rounded-[20px] py-[8px] pl-[16px] pr-[12px] cursor-pointer z-[1] shrink-0 self-start bg-[#F8F8F9]">
        <div className="absolute inset-0 button-gradient button-gradient opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-[20px]"></div>
        <div className="flex items-center gap-[4px] z-10" onMouseEnter={onHover}>
          <div className="text-[14px] font-[700] text-primary">Read More</div>
          <div className="w-[24px] h-[24px]">
            <OpenMindRive src={ArrowRiv} ref={ref} />
          </div>
        </div>
      </div>
      <div className="absolute w-[289px] h-[289px] 3xl:top-[50%] max-3xl:top-[40%] right-[85px] z-[0] opacity-[60%]"><img src={BlueLogoImage} alt="" /></div>
    </div>
  )
}

export default ContributionBanner