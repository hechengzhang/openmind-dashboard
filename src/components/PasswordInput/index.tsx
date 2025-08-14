import { Input, InputProps } from "antd"
import HideSvg from "@/assets/images/login/hide.svg?react";
import ShowSvg from "@/assets/images/login/show.svg?react";
import LockSvg from "@/assets/images/login/lock.svg?react"
import classNames from "classnames";

const PasswordInput = (props: InputProps & { prefixIcon?: boolean, error?: boolean }) => {
  return (
    <Input.Password
      {...props}
      prefix={props.prefixIcon? <LockSvg /> : null}
      className={classNames({ 'error': props.error })}
      iconRender={(visible) => (
        <div className="w-[24px] h-[24px]">
          {visible ? <ShowSvg /> : <HideSvg />}
        </div>
      )}
    />
  )
}

export default PasswordInput