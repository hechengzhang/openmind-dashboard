import DashboardHeader from "./DashboardHeader"
import PointCards from "./PointCards"
import Chart from "./Chart"
import ContributionBanner from "./ContributionBanner"
import PageAnimation from "@/components/PageAnimation"


const Dashboard = () => {
  return (
    <PageAnimation name="dashboard">
      <div className="px-[24px] pt-[40px] pb-[24px]">
        <DashboardHeader />
        <PointCards />
        <Chart />
        <ContributionBanner />
      </div>
    </PageAnimation>
  )
}

export default Dashboard
