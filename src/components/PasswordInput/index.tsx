import { Input, InputProps } from "antd"
import HideSvg from "@/assets/images/login/hide.svg?react";
import ShowSvg from "@/assets/images/login/show.svg?react";

const PasswordInput = (props: InputProps) => {
  return (
    <Input.Password
      {...props}
      iconRender={(visible) => (
        <div className="w-[24px] h-[24px]">
          {visible ? <ShowSvg /> : <HideSvg />}
        </div>
      )}
    />
  )
}

export default PasswordInput