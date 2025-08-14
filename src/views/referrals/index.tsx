import ReferralsBanner from "./ReferralsBanner"
import ReferralStats from "./ReferralStats"
import ReferralSteps from "./ReferralSteps"

const Referrals = () => {
  return (
    <div className="px-[24px] pt-[40px]">
      <ReferralsBanner/>
      <ReferralStats/>
      <ReferralSteps />
    </div>
  )
}

export default Referrals


