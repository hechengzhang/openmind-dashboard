import DashboardHeader from "./DashboardHeader"
import PointCards from "./PointCards"
import Chart from "./Chart"
import ContributionBanner from "./ContributionBanner"


const Dashboard = () => {
  return (
    <div className="px-[24px] pt-[40px]">
      <DashboardHeader />
      <PointCards />
      <Chart />
      <ContributionBanner />
    </div>
  )
}

export default Dashboard
