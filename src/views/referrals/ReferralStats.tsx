import GiftSvg from "@/assets/images/referrals/gift.svg?react"
import AddUserSvg from "@/assets/images/referrals/add-user.svg?react"
import ShareSvg from "@/assets/images/referrals/share.svg?react"
import CopySvg from "@/assets/images/referrals/copy.svg?react"
import CopiedSuccessfullySvg from "@/assets/images/referrals/copied-successfully.svg?react"
import { useState } from "react"
import { message } from "antd"

const ReferralStats = () => {
  const referralCode = "ZXV7JZ";
  const [visible, setVisible] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setVisible(true)
      setTimeout(() => setVisible(false), 2000)
      message.success('Referral Code Copied')
    });
  };

  return (
    <div className="flex gap-[24px] my-[20px]">
      <div className="flex-[1] px-[32px] py-[24px] bg-white rounded-[20px]">
        <div className="flex items-center gap-[4px] mb-[32px]">
          <div className="w-[24px] h-[24px]"><GiftSvg /></div>
          <div className="text-[16px] leading-[20px] text-primary">Referral Rewards</div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-primary text-[36px] font-[500] text-primary leading-[27px] mb-[12px]">2,250</div>
            <div className="text-[14px] text-black/60">Total Points</div>
          </div>
          <div>
            <div className="font-primary text-[36px] font-[500] text-primary leading-[27px] mb-[12px]">50</div>
            <div className="text-[14px] text-black/60">Today’s Points</div>
          </div>
        </div>
      </div>
      <div className="flex-[2] px-[32px] py-[24px] bg-white rounded-[20px]">
        <div className="flex justify-between mb-[32px]">
          <div className="flex items-center gap-[4px]">
            <div className="w-[24px] h-[24px]"><AddUserSvg /></div>
            <div className="text-[16px] leading-[20px] text-primary">Referral</div>
          </div>
          <div className="flex gap-[4px] items-center px-[16px] py-[4px] bg-[#246BEE] rounded-[24px] cursor-pointer">
            <div className="w-[16px] h-[16px]"><ShareSvg /></div>
            <div className="text-[14px] text-white leading-[14px]">Tweet Your Referral</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-primary text-[36px] font-[500] text-primary leading-[27px] mb-[12px]">8</div>
            <div className="text-[14px] text-black/60">Qualified</div>
          </div>
          <div>
            <div className="font-primary text-[36px] font-[500] text-primary leading-[27px] mb-[12px]">2</div>
            <div className="text-[14px] text-black/60">Pending</div>
          </div>
          <div>
            <div className="flex gap-[12px] items-center mb-[12px]">
              <div className="font-primary text-[36px] font-[500] text-primary leading-[27px]">{referralCode}</div>
              {
                visible
                  ? <div className="w-[30px] h-[30px] cursor-pointer"><CopiedSuccessfullySvg /></div>
                  : <div className="w-[30px] h-[30px] cursor-pointer" onClick={handleCopy}><CopySvg /></div>
              }
            </div>
            <div className="text-[14px] text-black/60">Referral code</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralStats