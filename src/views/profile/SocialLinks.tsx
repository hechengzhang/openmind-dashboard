import BlackInfoCircleSvg from "@/assets/images/login/black-infoCircle.svg?react"
import AddSvg from "@/assets/images/profile/add.svg?react"
import UnlinkSvg from "@/assets/images/profile/unlink.svg?react"
import TwitterSvg from "@/assets/images/profile/twitter.svg?react"
import DiscordSvg from "@/assets/images/profile/discord.svg?react"
import CheckCircleSvg from "@/assets/images/profile/checkCircle.svg?react"
import { Popover } from "antd"
import { useMemo } from "react"
import { useUser } from "@clerk/clerk-react"

const SocialLinks = () => {
  return (
    <div className="flex-col gap-[8px]">
      <div className="flex items-center gap-[8px]">
        <div className="text-[16px] leading-[20px] text-secondary">Social Links</div>
        <Popover
          content={(
            <div className="px-[12px] py-[8px] w-[333px]">
              <div className="font-primary text-[16px] font-[700] text-primary mb-[8px]">Social Links</div>
              <div className="text-[12px] font-[500] leading-[150%] text-black/50">
                Device NameConnect your accounts to verify your profile, join the community, and keep updated on upcoming releases. 
                Connected social accounts may qualify you for bonus rewards or roles in future FABRIC programs.
              </div>
            </div>
          )}
          placement="bottom"
        >
          <div className="w-[20px] h-[20px] opacity-[60%] hover:opacity-[100%] duration-300"><BlackInfoCircleSvg /></div>
        </Popover>
      </div>
      <div className="flex gap-[24px]">
        <SocailLinkItem type="twitter" />
        <SocailLinkItem type="discord" />
      </div>
    </div>
  )
}

const SocailLinkItem = ({ type } : { type: 'twitter' | 'discord' }) => {
  const { user } = useUser()
  const isTwitter = type === 'twitter'
  const isLinked = false


  const text = useMemo(() => {
    let text = isTwitter? 'Twitter' : 'Discord'
    return text
  }, [isTwitter])

  const onLink = async () => {
    
  }

  return (
    <div className="flex-1 flex justify-between items-center p-[16px] border-[1px] border-line rounded-[12px] cursor-pointer z-[1] bg-white" onClick={onLink}>
      <div className="flex items-center gap-[14px]">
        <div className="w-[32px] h-[32px] flex-row-center bg-[#F3F5F7] rounded-[100%]">
          <div className="w-[16px] h-[16px]">
            {isTwitter? <TwitterSvg /> : <DiscordSvg />}
          </div>
        </div>
        <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.006em] text-primary">{text}</div>
      </div>
      <div className="w-[16px] h-[16px]">
        {isLinked? <UnlinkSvg /> : <AddSvg />}
      </div>
    </div>
  )
}

export default SocialLinks
