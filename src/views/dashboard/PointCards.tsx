import WhiteSurgeSvg from "@/assets/images/dashboard/white-surge.svg?react"
import GreenUpSvg from "@/assets/images/dashboard/green-up.svg?react"
import RedDownSvg from "@/assets/images/dashboard/red-down.svg?react"
import PointCard from "@/views/dashboard/PointCard"

const PointCards = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] gap-[24px]">
      <PointCard
        title="Total Points"
        value={22505}
        change="5.5%"
        changeColor="#fff"
        changeIcon={<WhiteSurgeSvg />}
        subText="from last month"
        isPrimary
      />
      <PointCard
        title="Season 1 Points"
        value={5601}
        change="5.5%"
        changeColor="#FD015F"
        changeIcon={<RedDownSvg />}
        subText="from last month"
      />
      <PointCard
        title="Today’s Points"
        value={874}
        change="5.5%"
        changeColor="#3DD695"
        changeIcon={<GreenUpSvg />}
        subText="from yesterday"
      />
    </div>
  )
}

export default PointCards
