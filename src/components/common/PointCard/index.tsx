import classNames from "classnames"
import CountUp from "../CountUp"

type PointCardProps = {
  title: string
  value: number
  change: string
  changeColor?: string
  changeIcon?: React.ReactNode
  subText: string
  bgGradient?: boolean
  extraImage?: string
}

const PointCard = ({ title, value, change, changeColor, changeIcon, subText, bgGradient = false, extraImage }: PointCardProps) => {
  return (
    <div className={classNames('relative px-[32px] py-[34px] rounded-[20px] flex-1 overflow-hidden', bgGradient ? "bg-gradient text-white" : "bg-white text-primary")}>
      <div className="relative text-[16px] font-[500] leading-[10px] z-[1]">{title}</div>
      <div className="relative font-primary text-[36px] font-[500] mt-[32px] mb-[12px] leading-[27px] z-[1]">
        <CountUp
          from={0}
          to={value}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        /></div>
      <div className="flex items-center gap-[2px]">
        <div className="w-[16px] h-[16px]">{changeIcon}</div>
        <div className="text-[14px] font-[500]" style={{ color: changeColor }}>
          {change}
        </div>
        <div className={classNames('text-[14px]', bgGradient ? "text-white/60" : "text-secondary")}>{subText}</div>
      </div>
      {extraImage && (
        <div className="absolute bottom-[50px] right-[-36px] w-[150px] h-[150px] z-[0]">
          <img src={extraImage} alt="" />
        </div>
      )}
    </div>
  )
}

export default PointCard