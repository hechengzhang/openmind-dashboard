import AppStoreImage from "@/assets/images/profile/appStore.png"
import GoolePlayImage from "@/assets/images/profile/goolePlay.png"
import WhiteInfoCircleSvg from "@/assets/images/login/white-infoCircle.svg?react"
import TransparentLogoImage from "@/assets/images/common/transparentLogo.png"
import Avatar from "@/components/Avatar"
import { useUser } from "@clerk/clerk-react"
import { useMemo, useState } from "react"
import { Popover, Skeleton } from "antd"
import OpenMindButton from "@/components/common/Button"
import EditProfilePop from "./profilePop/EditProfilePop"

const UserInfo = () => {
  const [visible, setVisible] = useState(false);
  const { user } = useUser()
  const isLoading = useMemo(() => {
    return !Boolean(user)
  }, [user])

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[12px]">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <Avatar />
          </div>
          <div className="flex-col gap-[6px]">
            {isLoading ? (
              <>
                <Skeleton.Node active className="!h-[26px] !w-[60px] !align-top" />
                <Skeleton.Node active className="!h-[18px] !w-[120px] !align-top" />
              </>
            ) : (
              <>
                <div className="font-primary text-[20px] font-[700] leading-[26px] h-[26px] text-primary">{user?.fullName}</div>
                <div className="text-[14px] leading-[18px] text-secondary">{user?.primaryEmailAddress.emailAddress}</div>
              </>
            )}
          </div>
        </div>
        <OpenMindButton onClick={() => setVisible(true)} size="large">Edit Profile</OpenMindButton>
      </div>
      <div className="relative p-[20px] bg-blue rounded-[20px]">
        <div className="flex justify-between items-center mb-[32px]">
          <div>
            <div className="font-primary text-[32px] font-[500] text-white leading-[24px] mb-[10px]">2,250</div>
            <div className="text-[14px] text-white/60">Points Collected</div>
          </div>
          <div className="flex gap-[16px]">
            <div className="w-[132px] h-[44px] cursor-pointer bg-white/8 border border-white/4 rounded-[8px] hover:bg-white/20 active:scale-90 duration-300">
              <img src={AppStoreImage} alt="" />
            </div>
            <div className="w-[149px] h-[44px] cursor-pointer bg-white/8 border border-white/4 rounded-[8px] hover:bg-white/20 active:scale-90 duration-300">
              <img src={GoolePlayImage} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="text-[16px] font-[500] leading-[20px] text-white">Connect your phone to the FABRIC network with our mobile app</div>
          <Popover
            content={(
              <div className="px-[12px] py-[8px] w-[333px]">
                <div className="font-primary text-[16px] font-[700] text-primary mb-[8px]">Mobile App</div>
                <div className="text-[12px] font-[500] leading-[150%] text-black/50">
                  These points are building your reputation in the decentralized gig economy for machines. 
                  Collecting points now = unlocking utility later. Start by sharing your referral code and onboarding more devices.
                </div>
              </div>
            )}
            placement="bottom"
          >
            <div className="w-[20px] h-[20px] opacity-60 hover:opacity-100 duration-300">
              <WhiteInfoCircleSvg />
            </div>
          </Popover>
        </div>
        <div className="absolute w-[152px] h-[152px] right-[8px] top-[86px] z-[0]">
          <img src={TransparentLogoImage} alt="" />
        </div>
      </div>
      <EditProfilePop visible={visible} setVisible={setVisible} />
    </>
  )
}

export default UserInfo
