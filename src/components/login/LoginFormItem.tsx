import React from "react"

interface Props {
  children: React.ReactNode,
  label: string,
  slot?: React.ReactNode,
  labelSuffix?: React.ReactNode,
}

const LoginFormItem = (props: Props) => {
  const { children, label, slot, labelSuffix } = props

  return (
    <div className="flex-col gap-[8px]">
      <div className="flex-row-center-between">
        <div className="flex items-center gap-[4px]">
          <div className="text-[14px] font-[500] leading-[150%] text-primary">{label}</div>
          {labelSuffix}
        </div>
        {slot}
      </div>
      {children}
    </div>
  )
}

export default LoginFormItem