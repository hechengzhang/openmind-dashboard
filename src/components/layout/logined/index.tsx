import { ReactNode, useEffect } from "react"
import Scrollbar from "../../common/Scrollbar";
import { useSignIn, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import Sidebar from "./sidebar";
import useAxios from "@/hooks/useAxios";
import { setUserDetails } from "@/redux/userDetail/reducer";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '@/redux/store';

interface Props {
  children: ReactNode
}

const LoginedLayout = (props: Props) => {
  const { children } = props;
  const { signIn } = useSignIn()
  const { isSignedIn, user } = useUser();
  const { axiosPost } = useAxios()
  const { userInfo } = useSelector((state: IRootState) => state.userDetailsReducer);
  const dispatch = useDispatch<AppDispatch>();
  
  if (!isSignedIn && signIn) {
    return <Navigate to='/openmind/sign-in' replace />;
  }

  useEffect(() => {
    if (isSignedIn) {
      handleCheckIn()
    }
  }, [isSignedIn])

  useEffect(() => {
    if (user && !userInfo.name) {
      setAvatar()
    }
  }, [user, userInfo])

  const setAvatar = async() => {
    let avatar = user.imageUrl
    try {
      const uri = `https://assets.openmind.org/app/user-logos/${user.id}.png`;
      const res = await fetch(uri)
      if (res.status === 200) {
        avatar = uri
      }
    } finally {
      dispatch(setUserDetails({
        avatar,
        name: user.fullName
      }))
    }
  }

  const handleCheckIn = async() => {
    await axiosPost({
      url: '/api/core/fabric/check-in',
    })
  }

  return (
    <div className="w-full h-[100dvh] flex">
      <Sidebar />
      <div className='flex-1 overflow-hidden'>
        <Scrollbar>
          {children}
        </Scrollbar>
      </div>
    </div>
  )
}

export default LoginedLayout