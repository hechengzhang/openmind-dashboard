import OpenMindButton from "../common/Button"
import LinkRiv from '@/assets/animations/dashboard/link.riv'
import OpenMindRive from "../OpenMindRive"
import { useRef } from "react"

const LinkDeviceButton = () => {
  const ref = useRef(null)

  const onHover = () => {
    ref.current?.play()
  }

  return (
    <OpenMindButton type='blue' size="large" onClick={() => window.open('https://portal.openmind.org/')} onMouseEnter={onHover} className="link-device-btn">
      <div className="w-[20px] h-[20px]">
        <OpenMindRive ref={ref} src={LinkRiv} />
      </div>
      <span>Link A Device</span>
    </OpenMindButton>
  )
}

export default LinkDeviceButton