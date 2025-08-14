import { IRootState } from "@/redux/store";
import { useUser } from "@clerk/clerk-react";
import { Skeleton } from "antd";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const Avatar = () => {
  const { user } = useUser();
  const { userInfo } = useSelector((state: IRootState) => state.userDetailsReducer);

  const isLoading = useMemo(() => {
    return !userInfo.name
  }, [userInfo]);

  const firstLetter = useMemo(() => {
    return user?.fullName?.charAt(0)?.toUpperCase();
  }, [user])

  return (
    <>
      {isLoading ? (
        <Skeleton.Node active className="!w-full !h-full" />
      ) : (
        <>
          {userInfo.avatar ? (
            <img src={userInfo.avatar} alt="User" />
          ) : (
            <div className="flex-row-center w-full h-full text-white text-[16px] font-primary font-bold bg-[linear-gradient(to_bottom,#3C81FF_0%,#246BEE_50%,#246BEE_100%)]">
              {firstLetter}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Avatar