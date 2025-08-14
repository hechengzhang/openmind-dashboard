import OpenMindButton from "../common/Button"
import DownloadRiv from '@/assets/animations/dashboard/download.riv'
import OpenMindRive from "../OpenMindRive"
import { useRef } from "react"

const DownloadExtensionsButton = () => {
  const ref = useRef(null)

  const onHover = () => {
    ref.current?.play()
  }

  return (
    <OpenMindButton type='white' size="large" onMouseEnter={onHover}>
      <div className="w-[20px] h-[20px]">
        <OpenMindRive ref={ref} src={DownloadRiv} />
      </div>
      <span>Extensions</span>
    </OpenMindButton>
  )
}

export default DownloadExtensionsButton