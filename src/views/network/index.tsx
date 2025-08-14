import { useEffect, useState } from "react"
import NetworkMap from "./map"
import NearbyMachines from "./NearbyMachines"
import OpenMindRive from "@/components/OpenMindRive"
import MapLoadingRiv from '@/assets/animations/network/map-loading.riv'
import classNames from "classnames"

const Network = () => {
  const [loading, setLoading] = useState(true)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoaded(true)
      }, 500)
    }
  }, [loading])

  return (
    <div className="relative w-full h-[100vh]">
      {!loaded && (
        <div className={classNames("absolute inset-0 z-[99] bg-[#F5F7FA] flex-col-center gap-[12px] duration-500", { 'opacity-0': !loading })}>
          <div className="w-[64px] h-[64px]">
            <OpenMindRive src={MapLoadingRiv} autoplay />
          </div>
          <span className="text-[12px] leading-[120%] text-secondary">The map is loading...</span>
        </div>
      )}
      <NearbyMachines />
      <NetworkMap />
    </div>
  )
}

export default Network
