import { useEffect, useMemo, useState } from "react"
import OpenMindButton from "@/components/common/Button"
import { ModalProps } from "@/types/modal"
import OpenMindModal from "@/components/common/Modal"
import Avatar from "@/components/Avatar"
import { Input, message, Upload } from "antd"
import { useUser } from "@clerk/clerk-react"
import CameraSvg from '@/assets/images/profile/camera.svg?react'
import useUploadAvatar from "@/hooks/useUploadAvatar"
import ImgCrop from "antd-img-crop"

const EditProfilePop = (props: ModalProps) => {
  const { visible, setVisible } = props
  const { user } = useUser()
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { uploadAvatar } = useUploadAvatar()
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (visible) {
      setName(user?.fullName)
    }
  }, [visible, user])

  const allFilled = useMemo(() => {
    return name.trim()
  }, [name])

  const onSave = async () => {
    if (name === user?.fullName) {
      setVisible(false)
      return
    }
    try {
      setLoading(true)

      // Split full name into first and last name
      const nameParts = name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      // Update name if changed
      await user.update({
        firstName,
        lastName,
      })
      message.success("Updated successfully")
      // Reload the session to update the UI
      await user.reload()
      setVisible(false)
    } catch (error) {
      console.error("Error updating profile:", error)
      message.error("Error updating profile")
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async(file) => {
    if (uploading) return

    setUploading(true)
    try {
      await uploadAvatar(file)
    } finally {
      setLoading(false)
    }
    
    return false
  }

  return (
    <OpenMindModal visible={visible} setVisible={setVisible} title='Edit Profile' width={440}>
      <div className="flex-row-center px-[20px] pb-[34px] pt-[12px]">
        <ImgCrop
          modalTitle='Edit Image'
          modalProps={{
            centered: true,
          }}
          modalWidth={440}
        >
          <Upload beforeUpload={handleUpload} maxCount={1} showUploadList={false}>
            <div className="relative w-[90px] h-[90px] cursor-pointer">
              <div className="w-full h-full border-[1px] border-line rounded-full overflow-hidden">
                <Avatar />
              </div>
              <div className="w-[26px] h-[26px] absolute bottom-[1px] right-[10px]">
                <CameraSvg />
              </div>
            </div>
          </Upload>
        </ImgCrop>
      </div>
      <div className="flex-col gap-[12px]">
        <div className="flex-col gap-[8px]">
          <div className="text-[14px] font-[500] leading-[150%] text-primary">Full name</div>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Please Enter Full Name" />
        </div>
        <div className="flex-col gap-[8px]">
        <div className="text-[14px] font-[500] leading-[150%] text-primary">Email</div>
          <Input value={user?.primaryEmailAddress.emailAddress} placeholder="Please Enter Email" disabled />
        </div>
      </div>
      <div className="flex gap-[10px] mt-[24px]">
        <OpenMindButton block size="xl" type="sencondary" onClick={() => setVisible(false)}>Cancel</OpenMindButton>
        <OpenMindButton block size="xl" type="primary" disabled={!allFilled} loading={loading} onClick={onSave}>Save</OpenMindButton>
      </div>
    </OpenMindModal>
  )
}

export default EditProfilePop