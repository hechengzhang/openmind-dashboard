import PhoneImage from "@/assets/images/my-devices/phone.png"
import OnSvg from "@/assets/images/my-devices/on.svg?react"
import { OpsBars } from "../my-devices/FabricNodeTable"

const NearbyMachines = () => {
  return (
    <div className="absolute top-[40px] left-[24px] right-[24px] border border-line xl:p-[32px] max-xl:py-[16px] max-xl:px-[32px] rounded-[20px] bg-white/60 blur-64 z-[10]">
      <div className="xl:flex justify-between max-xl:flex-col">
        <div>
          <div className="font-primary text-[24px] font-[700] text-primary mb-[8px] whitespace-nowrap">Find machines near you</div>
          <div className="text-[14px] font-[500] leading-[18px] text-[#6C6C6C]">Allow access of laptop’s bluetooth and location</div>
        </div>
        <div className="flex max-xl:mt-[10px] max-xl:justify-between">
          <div className="flex items-center gap-[12px] xl:px-[24px] pr-[16px]">
            <div className="w-[40px] h-[40px]" ><img src={PhoneImage} alt="" /></div>
            <div>
              <div className="text-[14px] font-[500] leading-[20px] text-primary">Catalog</div>
              <div className="text-[14px] leading-[20px] text-[#475467] whitespace-nowrap">ID: 15331318</div>
            </div>
          </div>
          <div className="flex-col gap-[4px] px-[24px] py-[16px] ">
            <div className="text-[12px] font-[500] text-secondary leading-[16px]">Status</div>
            <div className="flex items-center gap-[4px]">
              <div className="w-[14px] h-[14px]"><OnSvg /></div>
              <div className="text-[14px] font-[500] leading-[20px] text-[#067647]">ON</div>
            </div>
          </div>
          <div className="flex-col gap-[4px] px-[24px] py-[16px]">
            <div className="text-[12px] font-[500] text-secondary leading-[16px] whitespace-nowrap">Unclaimed Points</div>
            <div className="text-[14px] leading-[20px] ">15274609</div>
          </div>
          <div className="flex-col gap-[4px] px-[24px] py-[16px]">
            <div className="text-[12px] font-[500] text-secondary leading-[16px]">Ops/s</div>
            <div className="flex items-center gap-[4px]">
              <OpsBars count={2} />
              <div className="text-[14px] leading-[20px] ">0.057778</div>
            </div>
          </div>
          <div className="flex-col gap-[4px] px-[24px] py-[16px]">
            <div className="text-[12px] font-[500] text-secondary leading-[16px]">Device</div>
            <div className="text-[14px] leading-[20px] ">WEB</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NearbyMachines