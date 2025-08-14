import TwitterSvg from "@/assets/images/sidebar/twitter.svg?react"
import DiscordSvg from "@/assets/images/sidebar/discord.svg?react"
import BallSvg from "@/assets/images/sidebar/ball.svg?react"
import classNames from "classnames"
import { LoginedLayoutSidebarProps } from "."

const links = [
  { icon: TwitterSvg, url: "https://x.com/openmind_agi" },
  { icon: DiscordSvg, url: "https://discord.com/invite/VUjpg4ef5n" },
  { icon: BallSvg, url: "https://openmind.org/" },
]

const Socail = ({ isCollapsed }: LoginedLayoutSidebarProps) => {
  return (
    <div className="px-[20px] overflow-hidden">
      <div className="px-[4px] pb-[16px] border-b-[1px] border-line">
        <div
          className={classNames(
            "overflow-hidden text-[12px] font-[500] leading-[16px] text-[#99A0AE] mb-[10px] w-[200px]",
            { 'hidden': isCollapsed }
          )}
        >
          FOLLOW US
        </div>

        <div className={classNames("gap-[16px]", isCollapsed? "flex-col justify-center" : "flex")}>
          {links.map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              className="cursor-pointer hover:bg-white rounded-[6px] duration-300"
            >
              <div className="w-[32px] h-[32px] opacity-[30%] hover:opacity-100 transition-opacity duration-300" >
                <Icon />
              </div>
            </a>
          ))}
      </div>
      </div>
    </div>
  )
}

export default Socail
