import OnSvg from "@/assets/images/my-devices/on.svg?react"
import OffSvg from "@/assets/images/my-devices/off.svg?react"
import { devicesArray } from "./devicesArray"
import classNames from "classnames"
import Scrollbars from "react-custom-scrollbars-2"

const TOTAL_BARS = 10

export const OpsBars = ({ count }: { count: number }) => (
  <div className="flex gap-[2px]">
    {Array.from({ length: TOTAL_BARS }).map((_, i) => (
      <div
        key={i}
        className={`w-[2px] h-[14px] ${i < count ? 'bg-[#3DD695]' : 'bg-[#EAECF0]'}`}
      />
    ))}
  </div>
)

const FabricNodeTable = () => {
  const count = devicesArray.filter(item => item.status === 'ON').length

  return (
    <div className="bg-white pt-[8px] rounded-[20px]">
      <Scrollbars style={{ height: 475 }}>
        <div className="min-w-[1280px]">
          <div className="grid grid-cols-6 border-b-[1px] border-[#EAECF0] text-[14px] font-[500] leading-[18px] text-secondary">
            <div className="px-[24px] py-[12px]">Your nodes ({count})</div>
            <div className="px-[24px] py-[12px]">Status</div>
            <div className="px-[24px] py-[12px]">Unclaimed Points</div>
            <div className="px-[24px] py-[12px]">Ops/s</div>
            <div className="px-[24px] py-[12px]">Device</div>
            <div className="px-[24px] py-[12px] text-right">Credits Used</div>
          </div>
          {devicesArray.map((item, index) => {
            const { user: { image, name, id }, status, unclaimedPoints, Ops: { light, number }, device, points } = item
            return (
              <div key={index} className="grid grid-cols-6 text-primary">
                <div className="flex gap-[12px] px-[24px] py-[16px]">
                  <div className="w-[40px] h-[40px]" ><img src={image} alt="" /></div>
                  <div>
                    <div className="text-[14px] font-[500] leading-[20px] text-primary">{name}</div>
                    <div className="text-[14px] leading-[20px] text-secondary">ID: {id}</div>
                  </div>
                </div>
                <div className="flex items-center gap-[4px] px-[24px] py-[16px]">
                  <div className="w-[14px] h-[14px]">{status === 'ON' ? <OnSvg /> : <OffSvg />}</div>
                  <div className={classNames("text-[14px] font-[500] leading-[20px] ", item.status === 'ON' ? 'text-[#067647]' : 'text-primary')}>{status}</div>
                </div>
                <div className="flex items-center px-[24px] py-[16px] text-[14px] leading-[20px]">
                  {unclaimedPoints === 0 ? '-' : unclaimedPoints}
                </div>
                <div className="flex items-center gap-[4px] px-[24px] py-[16px]">
                  {
                    light === 0 ? '-' :
                      <>
                        <OpsBars count={light} />
                        <div className="text-[14px] leading-[20px]">{number}</div>
                      </>
                  }
                </div>
                <div className="flex items-center px-[24px] py-[16px] text-[14px] leading-[20px]">
                  {device}
                </div>
                <div className="flex items-center justify-end px-[24px] py-[16px] text-[14px] leading-[20px]">
                  {points}
                </div>
              </div>
            )
          })}
        </div>
      </Scrollbars>
    </div>
  )
}

export default FabricNodeTable
