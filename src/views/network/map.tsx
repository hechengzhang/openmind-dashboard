import RadarScan from "./RadarScan"
import MapImage from '@/assets/images/network/map.png'

const NetworkMap = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${MapImage})` }} />
      <RadarScan/>
    </div>
  )
}

export default NetworkMap