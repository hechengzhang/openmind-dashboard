import { message } from "antd";
import useAxios from "./useAxios"
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setUserDetails } from "@/redux/userDetail/reducer";
import { useUser } from "@clerk/clerk-react";
import { UploadAvatarResponseType } from "@/types/user";

const useUploadAvatar = () => {
  const { user } = useUser()
  const { axiosPost } = useAxios()
  const dispatch = useDispatch<AppDispatch>();
  
  const uploadAvatar = async(file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axiosPost({
        url: '/api/core/fabric/user/logo',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }) as UploadAvatarResponseType;

      if (response?.logoUrl) {
        dispatch(setUserDetails({
          avatar: response.logoUrl,
          name: user.fullName
        }))
        message.success("Profile picture uploaded successfully")
        return
      }

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.error || "Failed to upload profile picture");
      // }
      // const data = await response.json();
      // setAvatar(imageUri);
      // return data;

      // dispatch(setUserDetails({
      //   avatar,
      //   name: user.fullName
      // }))
    } catch (error) {
      message.error(typeof error === 'object'? error?.error : "Error uploading profile picture")
    }
  }

  return {
    uploadAvatar
  }
}

export default useUploadAvatar