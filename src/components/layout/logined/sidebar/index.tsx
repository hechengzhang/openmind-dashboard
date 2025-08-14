import { useState } from "react";
import ArrowLeftSvg from "@/assets/images/sidebar/arrow-left.svg?react";
import classNames from "classnames";
import Socail from "./socail";
import Logo from "./logo";
import RouterList from "./routerList";
import UserProfile from "./userProfile";

export interface LoginedLayoutSidebarProps {
  isCollapsed: boolean;
  setisCollapsed?: (isCollapsed: boolean) => void;
}

const Sidebar = () => {
  const [isCollapsed, setisCollapsed] = useState(false);

  return (
    <div
      className={classNames(
        "relative flex-col h-full border-r-[1px] border-line duration-300 ease-in-out",
        isCollapsed ? 'w-[80px]' : 'w-[272px]'
      )}
    >
      {!isCollapsed && (
        <div className="absolute cursor-pointer z-[10] right-[24px] top-[24px]" onClick={() => setisCollapsed(true)}>
          <div className="w-[24px] h-[24px]">
            <ArrowLeftSvg />
          </div>
        </div>
      )}
      
      <Logo isCollapsed={isCollapsed} />
      <RouterList isCollapsed={isCollapsed} setisCollapsed={setisCollapsed} />
      <Socail isCollapsed={isCollapsed} />
      <UserProfile isCollapsed={isCollapsed} />
    </div>
  );
};

export default Sidebar;