import CoinsImage from "@/assets/images/dashboard/coins.png"
import OpenMindButton from "@/components/common/Button"
import RewardsBarChart from "@/components/common/RewardsPints"

const Chart = () => {
  return (
    <div className="lg:flex max-lg:flex-col gap-[24px] my-[16px]">
      <RewardsBarChart />
      <div className="lg:w-[357px] max-lg:mt-[16px] px-[32px] py-[24px] bg-white rounded-[20px] shrink-0">
        <div className="flex items-center justify-between ">
          <div className="font-primary text-[16px] text-primary font-[700] w-[211px]">FABRIC POINTS ARE MORE THAN A NUMBER.</div>
          <div className="w-[50px] h-[50px]"><img src={CoinsImage} alt="" /></div>
        </div>
        <div className="mt-[38px] mb-[24px]">
          <div className="text-[14px] font-[700] leading-[24px] text-primary mb-[8px] jus">[They are proof of your contribution]</div>
          <div className="text-[12px] leading-[18px] text-secondary">As the network evolves, points unlock early access to token benefits and utility in the marketplace of robotic applications, from teleops in real world settings to data/model knowledge sharing across hardware stacks. </div>
        </div>
        <OpenMindButton block size="large" type="sencondary">
          Get Started
        </OpenMindButton>
      </div>
    </div>
  )
}

export default Chart
