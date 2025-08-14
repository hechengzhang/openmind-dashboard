
import classNames from "classnames"
import Scrollbar from "../../../common/Scrollbar"
import { useMemo } from 'react'
import { Link, useLocation } from "react-router-dom"
import CategorySvg from "@/assets/images/sidebar/category.svg?react"
import BotSvg from "@/assets/images/sidebar/bot.svg?react"
import NetworkSvg from "@/assets/images/sidebar/network.svg?react"
import UsbStorageSvg from "@/assets/images/sidebar/usbStorage.svg?react"
import UsersSvg from "@/assets/images/sidebar/users.svg?react"
import { LoginedLayoutSidebarProps } from "."
import { Tooltip } from "antd"

const menuItems = [
  { Icon: CategorySvg, label: 'Dashboard', path: '/' },
  { Icon: NetworkSvg, label: 'Network', path: '/network' },
  { Icon: UsbStorageSvg, label: 'My Devices', path: '/my-devices' },
  { Icon: UsersSvg, label: 'Referrals', path: '/referrals', soon: true },
  { Icon: BotSvg, label: 'Robot', path: '/robot', soon: true },
];

const RouterList = ({ isCollapsed }: LoginedLayoutSidebarProps) => {
  return (
    <div className="flex-1 overflow-hidden">
      <Scrollbar>
        <div className="px-[20px]">
          <div className="border-t-[1px] border-line pt-[20px] flex-col gap-[8px]">
            {!isCollapsed && (
              <div className="p-[4px] text-[12px] font-[500] leading-[16px] text-[#99A0AE]">
                MAIN
              </div>
            )}
            {menuItems.map(item => (
              <RouterItem key={item.label} {...item} isCollapsed={isCollapsed} />
            ))}
          </div>
        </div>
      </Scrollbar>
    </div>
  )
}

const RouterItem = ({ Icon, label, path, soon, isCollapsed } : { Icon: any, label: string, path: string, soon?: boolean, isCollapsed: boolean }) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  const Component = soon ? 'div' : Link;

  const content = (
    <Component
      to={path}
      className={classNames(
        "flex items-center py-[8px] gap-[8px] duration-300",
        isCollapsed ? 'pl-[8px] w-[36px]' : 'pl-[12px]',
        {
          'bg-white': isActive,
          'group hover:bg-white cursor-pointer rounded-[8px]': !soon,
          'cursor-not-allowed': soon,
        }
      )}
    >
      <div className={classNames("w-[20px] h-[20px] group-hover:opacity-100 duration-300 flex-shrink-0", isActive ? 'opacity-100' : 'opacity-60')}>
        <Icon />
      </div>

      <div
        className={classNames(
          "flex items-center gap-[6px] duration-300 origin-left overflow-hidden whitespace-nowrap",
          isCollapsed ? "opacity-0 scale-95 max-w-0" : "opacity-100 scale-100 max-w-[180px]"
        )}
      >
        <span className={classNames(
          "text-[14px] font-[500] leading-[20px] group-hover:text-primary duration-300",
          isActive ? 'text-primary' : 'text-secondary'
        )}>
          {label}
        </span>

        {soon && (
          <span className={classNames(
            "text-[10px] font-[500] leading-[100%] text-[#676767] bg-black/10 rounded-[20px] px-[8px] py-[2px] duration-300",
            isCollapsed ? "opacity-0 scale-95" : "opacity-100 scale-100"
          )}>
            Soon
          </span>
        )}
      </div>
    </Component>
  );

  return isCollapsed ? (
    <Tooltip
      title={<span className="text-primary px-[4px] text-[14px]">{label}</span>}
      placement="right"
      color="white"
    >
      {content}
    </Tooltip>
  ) : (
    content
  );
};


export default RouterList