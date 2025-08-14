import OpenMindWordImage from "@/assets/images/sidebar/openMindWord.png"
import SmallLogoImage from "@/assets/images/sidebar/smallLogo.png"
import classNames from "classnames"
import { LoginedLayoutSidebarProps } from "."

const Logo = ({ isCollapsed } : LoginedLayoutSidebarProps) => {
  return (
    <div className={classNames("flex items-center p-[24px] gap-[4px] transition-all duration-300", { 'pl-[28px]': isCollapsed })}>
      <div className="w-[24px] h-[24px] shrink-0">
        <img src={SmallLogoImage} alt="Small Logo" />
      </div>
      <div className={classNames("duration-300 overflow-hidden", { "hidden": isCollapsed })}>
        <div className="w-[101px]">
          <img src={OpenMindWordImage} alt="OpenMind" />
        </div>
      </div>
    </div>
  )
}

export default Logo
