import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, } from 'recharts'
import { motion } from 'framer-motion'
import Scrollbars from 'react-custom-scrollbars-2'

const data = [
  { month: 'Jan', points: 2700 },
  { month: 'Feb', points: 1200 },
  { month: 'Mar', points: 3200 },
  { month: 'Apr', points: 3700 },
  { month: 'May', points: 3100 },
  { month: 'Jun', points: 4000 },
  { month: 'Jul', points: 2200 },
  { month: 'Aug', points: 3579 },
  { month: 'Sep', points: 2900 },
  { month: 'Oct', points: 2510 },
  { month: 'Nov', points: 2920 },
  { month: 'Dec', points: 3200 },

]

interface CustomBarProps {
  x: number
  y: number
  width: number
  height: number
  index: number
  payload: any
  onMouseEnter?: (payload: any, index: number) => void
  onMouseLeave?: (payload: any, index: number) => void
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
}

const CustomBar = ({ x, y, width, height, index, payload, onMouseEnter, onMouseLeave, hoveredIndex, setHoveredIndex, }: CustomBarProps) => {
  const extension = 10
  const radius = 8
  const newHeight = height + extension

  const isHovered = index === hoveredIndex
  const fillColor = isHovered ? '#246BEE' : '#EFF5FF'

  const path = `
    M ${x + radius},${y} L ${x + width - radius},${y}
    A ${radius},${radius} 0 0 1 ${x + width},${y + radius}
    L ${x + width},${y + newHeight - radius}
    A ${radius},${radius} 0 0 1 ${x + width - radius},${y + newHeight}
    L ${x + radius},${y + newHeight}
    A ${radius},${radius} 0 0 1 ${x},${y + newHeight - radius}
    L ${x},${y + radius}
    A ${radius},${radius} 0 0 1 ${x + radius},${y} Z
  `

  return (
    <g
      onMouseEnter={() => {
        setHoveredIndex(index)
        onMouseEnter?.(payload, index)
      }}
      onMouseLeave={() => {
        setHoveredIndex(null)
        onMouseLeave?.(payload, index)
      }}
    >
      <motion.path
        d={path}
        fill={fillColor}
        initial={{ fill: '#EFF5FF' }}
        animate={{ fill: isHovered ? '#246BEE' : '#EFF5FF' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ cursor: 'pointer' }}
      />
      {isHovered && (
        <text
          x={x + width / 2}
          y={y - 8}
          textAnchor="middle"
          fill="#246BEE"
          fontSize={16}
          fontWeight={600}
        >
          {payload.points.toLocaleString()}
        </text>
      )}
    </g>
  )
}

interface CustomizedTickProps {
  x: number
  y: number
  payload: { value: string }
  index: number
  hoveredIndex: number | null
}

const CustomizedXAxisTick = ({ x, y, payload, index, hoveredIndex, }: CustomizedTickProps) => {
  const isHovered = index === hoveredIndex
  const color = isHovered ? '#246BEE' : '#C2C4C6'

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill={color}
        fontSize={12}
        style={{ transition: 'fill 0.2s ease' }}
      >
        {payload.value}
      </text>
    </g>
  )
}

const RewardsBarChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
   const [height, setHeight] = useState(286);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1920) { 
        setHeight(392);
      } else {
        setHeight(286);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="px-[32px] py-[24px] pb-[20px] rounded-[20px] bg-white lg:mr-[8px]">
      <Scrollbars style={{ height}}>
        <div className="flex-col max-3xl:h-[286px] 3xl:h-[392px] rounded-[20px] min-w-[700px] pb-[22px]">
          <div className="text-[20px] font-[600] leading-[18px] mb-[30px]">Rewards Points</div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barSize={32}
              margin={{ top: 20, right: 10, left: -8, bottom: 5 }}
            >
              <CartesianGrid vertical={false} stroke="rgba(204, 222, 248, 0.5)" strokeWidth={0.5} />
              <XAxis
                tickMargin={10}
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={(props) => {
                  const index = data.findIndex(
                    (d) => d.month === props.payload.value
                  )
                  return (
                    <CustomizedXAxisTick
                      {...props}
                      index={index}
                      hoveredIndex={hoveredIndex}
                    />
                  )
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ dx: -1, fill: '#C2C4C6', fontSize: 12 }}
                tickMargin={28}
                tickFormatter={(value) =>
                  value === 0 ? '0' : `${value / 1000}K`
                }
                domain={[0, 4000]}
              />
              <Bar
                dataKey="points"
                shape={(props: any) => (
                  <CustomBar
                    {...props}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                  />
                )}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Scrollbars>
    </div>
  )
}

export default RewardsBarChart