import classNames from "classnames"
import OpenMindRive from "@/components/OpenMindRive"
import PrimaryRiv from '@/assets/animations/dashboard/total-points.riv'
import ScrollNum from "@/components/ScrollNum"

type PointCardProps = {
  title: string
  value: number
  change: string
  changeColor?: string
  changeIcon?: React.ReactNode
  subText: string
  isPrimary?: boolean
}

const PointCard = ({ title, value, change, changeColor, changeIcon, subText, isPrimary }: PointCardProps) => {
  return (
    <div className={classNames('relative px-[32px] max-3xl:py-[34px] 3xl:py-[50px] rounded-[20px] flex-1 overflow-hidden', isPrimary ? "bg-gradient text-white" : "bg-white text-primary")}>
      <div className="relative text-[16px] font-[500] leading-[10px] z-[1]">{title}</div>
      <div className="relative flex font-primary text-[36px] font-[500] mt-[26px] mb-[6px] leading-[36px] z-[1] overflow-hidden h-[36px]">
        <ScrollNum value={value} height={36} />
      </div>
      <div className="flex items-center gap-[2px]">
        <div className="w-[16px] h-[16px]">{changeIcon}</div>
        <div className="text-[14px] font-[500]" style={{ color: changeColor }}>
          {change}
        </div>
        <div className={classNames('text-[14px]', isPrimary ? "text-white/60" : "text-secondary")}>{subText}</div>
      </div>
      {isPrimary && (
        <div className="absolute right-0 -top-[88px] translate-x-[88px] w-[256px] h-[256px] z-[0] ">
          <OpenMindRive src={PrimaryRiv} autoplay />
        </div>
      )}
    </div>
  )
}

export default PointCard