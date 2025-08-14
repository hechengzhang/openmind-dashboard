import ArrowSvg from "@/assets/images/sidebar/arrow.svg?react";
import classNames from "classnames";
import { useMemo, useRef, useState } from "react";
import ProfileSvg from "@/assets/images/profile/profile.svg?react";
import QuestionsSvg from "@/assets/images/profile/questions.svg?react";
import LogoutSvg from "@/assets/images/profile/logout.svg?react";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { LoginedLayoutSidebarProps } from ".";
import { Popover, Skeleton } from "antd";
import Avatar from "@/components/Avatar";
import { Link } from "react-router-dom";
import ProfileRiv from "@/assets/animations/userPop/profile.riv";
import AboutRiv from "@/assets/animations/userPop/about.riv";
import LogoutRiv from "@/assets/animations/userPop/logout.riv";
import OpenMindRive from "@/components/OpenMindRive";

const UserProfile = ({ isCollapsed }: LoginedLayoutSidebarProps) => {
  const { user } = useUser();
  const isLoading = useMemo(() => !Boolean(user), [user]);
  const [visible, setVisible] = useState(false)

  return (
    <Popover placement="right" trigger="click" content={<PopContent setVisible={setVisible} />} open={visible} onOpenChange={setVisible} destroyOnHidden>
      <div className="flex items-center gap-[12px] p-[24px] cursor-pointer">
        <div className="w-[40px] h-[40px] shrink-0 rounded-full overflow-hidden">
          <Avatar />
        </div>
        <div
          className={classNames(
            "flex-1 flex items-center justify-between overflow-hidden transition-all duration-300 origin-left",
            isCollapsed ? "opacity-0 scale-95 max-w-0 pointer-events-none" : "opacity-100 scale-100 max-w-[180px]"
          )}
          style={{ transitionProperty: "opacity, transform, max-width" }}
        >
          <div className="flex-1 overflow-hidden flex-col gap-[4px]">
            {isLoading ? (
              <>
                <Skeleton.Node active className="!h-[20px] !w-[60px] !leading-[20px] !align-top" />
                <Skeleton.Node active className="!h-[16px] !w-[120px] !leading-[20px] !align-top" />
              </>
            ) : (
              <>
                <div className="text-[14px] font-[500] leading-[20px] text-ellipsis text-primary">
                  {user?.fullName}
                </div>
                <div className="text-[12px] leading-[16px] h-[16px] text-ellipsis text-secondary">
                  {user?.primaryEmailAddress.emailAddress}
                </div>
              </>
            )}
          </div>
          <div className="w-[24px] h-[24px] shrink-0 ml-[4px]">
            <ArrowSvg />
          </div>
        </div>
      </div>
    </Popover>
  );
};

const PopContent = ({ setVisible }: { setVisible: (visible: boolean) => void }) => {
  const toAboutUs = () => {
    window.open('https://openmind.org/about', '_blank')
    hidePop()
  }

  const hidePop = () => {
    setVisible(false)
  }

  return (
    <div className="flex-col gap-[4px] w-[158px]">
      <Link to='/profile' onClick={hidePop}>
        <PopItem label="Profile" riv={ProfileRiv} />
      </Link>
      <PopItem label="About Us" riv={AboutRiv} onClick={toAboutUs} />
      <SignOutButton redirectUrl={'/sign-in'}>
        <PopItem label="Logout" riv={LogoutRiv} />
      </SignOutButton>

      <div className="flex items-center gap-[8px] p-[8px] text-[#99A0AE] text-[12px] leading-[20px]">
        <a
          href="https://openmind.org/terms"
          target="_blank"
          className="hover:text-blue"
          onClick={hidePop}
        >
          Terms
        </a>
        <span className="w-[1px] h-[12px] bg-line" />
        <a
          href="https://openmind.org/privacy"
          target="_blank"
          className="hover:text-blue"
          onClick={hidePop}
        >
          Privacy
        </a>
      </div>
    </div>
  );
};

const PopItem = ({ riv, label, onClick } : { riv: any, label: string, onClick?: () => void }) => {
  const ref = useRef(null)

  const onHover = () => {
    ref.current?.play()
  }

  return (
    <div
      className="flex gap-[8px] p-[8px] hover:bg-[#F3F5F7] rounded-[8px] duration-300 cursor-pointer"
      onClick={onClick}
      onMouseEnter={onHover}
    >
      <div className="w-[20px] h-[20px]">
        <OpenMindRive ref={ref} src={riv} />
      </div>
      <div className="text-[14px] font-[500] leading-[20px] text-primary">
        {label}
      </div>
    </div>
  )
}

export default UserProfile;
