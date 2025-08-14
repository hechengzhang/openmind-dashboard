import DeviceStatus from "./DeviceStatus"
import FabricNodeTable from "./FabricNodeTable"
import MyDevicesHeader from "./MyDevicesHeader"
import OnboardingGuide from "./OnboardingGuide"

const MyDevices = () => {
  return (
      <div className="px-[24px] pt-[27px]">
        <MyDevicesHeader />
        <DeviceStatus/>
        <FabricNodeTable/>
        <OnboardingGuide/>
      </div>
  )
}

export default MyDevices