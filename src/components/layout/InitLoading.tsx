import { useGlobalContext } from "@/context/useGlobalContext"
import classNames from "classnames"
import { useEffect, useState } from "react"
import RiveData from '@/assets/animations/openmind-logo.riv'
import OpenMindRive from "../OpenMindRive"

const InitLoading = () => {
  const { setInited } = useGlobalContext()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (hidden) {
      setTimeout(() => {
        setInited(true)
      }, 300)
    }
  }, [hidden])

  return (
    <div className={classNames("fixed inset-0 bg-white z-[99] duration-300 flex-row-center", { 'opacity-0': hidden })}>
      <div className="w-[200px] h-[200px]">
        <OpenMindRive src={RiveData} autoplay onStop={() => setHidden(true)} />
      </div>
    </div>
  )
}

export default InitLoading