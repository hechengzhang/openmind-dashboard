import CircleArrowRightSvg from "@/assets/images/referrals/circle-arrow-right.svg?react"
import CoinsImage from "@/assets/images/dashboard/coins.png"
import FriendJoinsImage from "@/assets/images/referrals/friend-joins.png"
import ShareYourImage from "@/assets/images/referrals/share-your-code.png"

const ReferralSteps = () => {
  return (
    <div className="py-[48px] px-[62px] bg-white rounded-[20px]">
      <div className="flex items-center justify-between">
        
        <div className="flex-col items-center">
          <div className="flex items-center gap-[16px] mb-[16px] max-w-[169px]">
            <div className="w-[64px] h-[64px] flex-shrink-0"><img src={ShareYourImage} alt="" /></div>
            <div className="text-[18px] font-[600] text-primary">Share Your Code</div>
          </div>
          <div className="text-[12px] text-primary opacity-[70%] text-center max-w-[220px] leading-[15px]">Copy or share your unique referral code in the top right hand corner of this page. Send it to a friend via any medium. (e.g., Twitter, email, DM)</div>
        </div>

        <div className="w-[24px] h-[24px] flex-shrink-0"><CircleArrowRightSvg /></div>

        <div className="flex-col items-center">
          <div className="flex items-center gap-[16px] mb-[16px] max-w-[248px]">
            <div className="w-[64px] h-[64px] flex-shrink-0"><img src={FriendJoinsImage} alt="" /></div>
            <div className="text-[18px] font-[600] text-primary">Friend Joins & Registers a Device</div>
          </div>
          <div className="text-[12px] text-primary opacity-[70%] text-center max-w-[220px] leading-[15px]">Your friend signs up with your code and connects at least one device to the FABRIC network.</div>
        </div>

        <div className="w-[24px] h-[24px] flex-shrink-0"><CircleArrowRightSvg /></div>

        <div className="flex-col items-center">
          <div className="flex items-center gap-[16px] mb-[16px] max-w-[183px]">
            <div className="w-[64px] h-[64px] flex-shrink-0"><img src={CoinsImage} alt="" /></div>
            <div className="text-[18px] font-[600] text-primary">Earn Points Together</div>
          </div>
          <div className="text-[12px] text-primary opacity-[70%] text-center max-w-[220px] leading-[15px]">Once your friend's device is active, you both earn bonus points as a reward. These points unlock incentives as the network grows.</div>
        </div>
      </div>
      <div className="flex justify-between">
      </div>
    </div>
  )
}

export default ReferralSteps