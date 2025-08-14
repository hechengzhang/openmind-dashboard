import ArrowRigthtSvg from "@/assets/images/referrals/arrow-right.svg?react"
import ButtonMaskImage from "@/assets/images/referrals/button-mask.png"

const ReferralsBanner = () => {

  return (
    <div className="bg-gradient-overlay p-[32px] rounded-[20px]">
      <div className="flex justify-between items-center mb-[28px]">
        <div className="font-primary text-[26px] font-[700] text-white leading-[20px]">GROW THE FABRIC NETWORK, SHARE THE REWARDS.</div>
      </div>
      <div className="text-[20px] font-[600] leading-[26px] text-white mb-[16px]">Invite friends to join FABRIC:</div>
      <div className="flex justify-between">
        <div className="max-w-[604px]">
          <div className="text-[16px] leading-[20px] text-white/75">Each one who connects a device gives you both X points. The more points you accumulate, the more early-access perks and marketplace privileges you unlock.</div>
        </div>
        <div className="relative flex items-center gap-[14px] pl-[16px] pr-[2px] py-[2px] bg-primary rounded-[100px] cursor-pointer overflow-hidden">
          <div className="text-[14px] font-[500] leading-[18px] text-white">Copy & Share My Code</div>
          <div className="bg-white p-[6px] rounded-[36px]">
            <div className="w-[24px] h-[24px]"><ArrowRigthtSvg /></div>
          </div>
          <div className="absolute top-[12px] left-[56px]"><img src={ButtonMaskImage} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default ReferralsBanner