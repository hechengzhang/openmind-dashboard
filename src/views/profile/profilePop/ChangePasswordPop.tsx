import OpenMindButton from "@/components/common/Button";
import Modal, { ModalProps } from "@/components/common/Modal"
import LoginFormTips from "@/components/login/LoginFormTips";
import PasswordInput from "@/components/PasswordInput";
import { useUser } from "@clerk/clerk-react";
import { message } from "antd";
import { useEffect, useMemo, useState } from "react";

const ChangePasswordPop = (props: ModalProps) => {
  const { visible, setVisible } = props
  const { user } = useUser()
  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!visible) {
      setNewPassword('')
      setConfirmPassword('')
    }
  }, [visible])

  const allFilled = useMemo(() => {
    return newPassword.trim() && confirmPassword.trim()
  }, [newPassword, confirmPassword])

  const onSave = async() => {
    setLoading(true)
    setError('')
    try {
      if (newPassword !== confirmPassword) {
        setError('Passwords do not match')
        return
      }
      await user.updatePassword({
        newPassword
      })

      message.success('Password changed successfully')
      setVisible(false)
    } catch (err) {
      console.log('Change password error', err);
      const errorObj = err as { errors?: Array<{ message: string, longMessage: string }> };
      if (errorObj.errors?.[0]?.longMessage) {
        setError(errorObj.errors[0].longMessage)
      } else {
        message.error("An error occurred during password change");
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal visible={visible} setVisible={setVisible} title='Change Password' width={440}>
      <div className="flex-col gap-[12px] pt-[12px]">
        <div>
          <div className="text-[14px] font-[500] leading-[150%] text-primary mb-[8px]">New Password</div>
          <PasswordInput
            value={newPassword}
            placeholder="Enter New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <div className="text-[14px] font-[500] leading-[150%] text-primary mb-[8px]">Confirm Password</div>
          <PasswordInput
            value={confirmPassword}
            placeholder="Enter New Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      {error && (
        <LoginFormTips text={error} className="mt-[24px]" />
      )}
      <div className="flex gap-[10px] mt-[24px]">
        <OpenMindButton block size="xl" type="sencondary" onClick={() => setVisible(false)}>Cancel</OpenMindButton>
        <OpenMindButton block size="xl" type="primary" disabled={!allFilled} loading={loading} onClick={onSave}>Save</OpenMindButton>
      </div>
    </Modal>
  )
}

export default ChangePasswordPop