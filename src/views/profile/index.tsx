import UserInfo from "./UserInfo"
import SocialLinks from "./SocialLinks"
import PasswordActions from "./PasswordActions"

const Profile = () => {
  return (
    <div className="flex justify-center w-full pt-[100px]">
      <div className="flex-col gap-[24px] w-[704px]">
        <UserInfo />
        <SocialLinks />
        <PasswordActions />
      </div>
    </div>
  )
}

export default Profile
