import UserInfo from "./UserInfo"
import SocialLinks from "./SocialLinks"
import PasswordActions from "./PasswordActions"
import PageAnimation from "@/components/PageAnimation"

const Profile = () => {
  return (
    <PageAnimation name='profile'>
      <div className="flex justify-center w-full pt-[100px]">
        <div className="flex-col gap-[24px] w-[704px]">
          <UserInfo />
          <SocialLinks />
          <PasswordActions />
        </div>
      </div>
    </PageAnimation>
  )
}

export default Profile
