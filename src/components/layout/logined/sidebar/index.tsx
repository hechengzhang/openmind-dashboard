import { useState } from "react";
import ArrowLeftSvg from "@/assets/images/sidebar/arrow-left.svg?react";
import classNames from "classnames";
import Socail from "./socail";
import Logo from "./logo";
import RouterList from "./routerList";
import UserProfile from "./userProfile";

export interface LoginedLayoutSidebarProps {
  isCollapsed: boolean;
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
      <div
        className={classNames(
          "absolute px-[4px] py-[8px] cursor-pointer z-[10] right-0 top-[20px]",
          { 'translate-x-[25px] rotate-180': isCollapsed }
        )}
        onClick={() => setisCollapsed((prev) => !prev)}
      >
        <div className="w-[16px] h-[16px]">
          <ArrowLeftSvg />
        </div>
      </div>
      
      <Logo isCollapsed={isCollapsed} />
      <RouterList isCollapsed={isCollapsed} />
      <Socail isCollapsed={isCollapsed} />
      <UserProfile isCollapsed={isCollapsed} />
    </div>
  );
};

export default Sidebar;