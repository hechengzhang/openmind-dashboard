import OnSvg from "@/assets/images/my-devices/on.svg?react"
import HumanoidImage from "@/assets/images/my-devices/humanoid.png"

const NearbyMachines = () => {
  return (
    <div className="absolute top-[40px] left-[24px] right-[24px] border border-line p-[32px] rounded-[20px] bg-white/60 backdrop-blur-[64px] z-[10]">
      <div className="xl:flex justify-between max-xl:flex-col">
        <div>
          <div className="font-primary text-[24px] font-[700] text-primary mb-[8px] whitespace-nowrap leading-[32px]">Find machines near you</div>
          <div className="text-[14px] font-[500] leading-[18px] text-[#6C6C6C]">Allow access of laptop’s bluetooth and location</div>
        </div>
        <div className="flex max-xl:mt-[10px] justify-between flex-1 xl:ml-[40px]">
          <div className="flex items-center gap-[12px] xl:px-[24px] pr-[16px]">
            <div className="w-[40px] h-[40px]" ><img src={HumanoidImage} alt="" /></div>
            <div>
              <div className="text-[14px] font-[500] leading-[20px] text-primary">humanoid</div>
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
            <div className="text-[12px] font-[500] text-secondary leading-[16px]">Duration of running</div>
            <div className="text-[14px] leading-[20px] ">1 day</div>
          </div>
          <div className="flex-col gap-[4px] px-[24px] py-[16px]">
            <div className="text-[12px] font-[500] text-secondary leading-[16px]">Credits Used</div>
            <div className="text-[14px] leading-[20px] ">98</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NearbyMachines