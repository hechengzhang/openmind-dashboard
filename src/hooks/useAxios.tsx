import { getAxios, GetAxiosParams, postAxios, PostAxiosParams } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";

const useAxios = () => {
  const auth = useAuth();

  return {
    axiosGet: async (params: GetAxiosParams) => {
      const token = await auth.getToken()
      return getAxios({ ...params, token })
    },
    axiosPost: async (params: PostAxiosParams) => {
      const token = await auth.getToken()
      return postAxios({ ...params, token })
    },
  }
}

export default useAxios