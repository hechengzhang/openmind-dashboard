import CoinsImage from "@/assets/images/dashboard/coins.png"
import OpenMindButton from "@/components/common/Button"
import RewardsBarChart from "@/views/dashboard/RewardsBarChart"

const Chart = () => {
  return (
    <div className="lg:grid lg:grid-cols-[2fr_1fr] my-[16px] max-lg:grid-flow-row">
      <RewardsBarChart />
      <div className="max-lg:mt-[16px] px-[32px] py-[24px] bg-white rounded-[20px] shrink-0 lg:ml-[16px]">
        <div className="flex items-center justify-between gap-[12px] 3xl:mb-[135px]">
          <div className="font-primary text-[16px] text-primary font-[700] max-lg:w-[211px] 3xl:w-[285px]">FABRIC POINTS ARE MORE THAN A NUMBER.</div>
          <div className="w-[50px] h-[50px] shrink-0"><img src={CoinsImage} alt="" /></div>
        </div>
        <div className="max-3xl:mt-[43px]  3xl:mb-[62px] max-3xl:mb-[20px]">
          <div className="text-[14px] font-[700] leading-[24px] text-primary mb-[8px]">[They are proof of your contribution]</div>
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

