import OpenMindButton from "@/components/common/Button"
import ChangePasswordPop from "./profilePop/ChangePasswordPop"
import { useState } from "react"

const PasswordActions = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div>
        <div className="text-[16px] leading-[20px] text-secondary mb-[8px]">Password</div>
        <OpenMindButton type="white" size="large" onClick={() => setVisible(true)}>
          Change Password
        </OpenMindButton>
      </div>
      <ChangePasswordPop visible={visible} setVisible={setVisible} />
    </>
  )
}

export default PasswordActions
