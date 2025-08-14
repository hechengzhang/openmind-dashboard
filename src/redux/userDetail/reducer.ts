import { UserInfoType } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserDetailsState {
  userInfo: UserInfoType
}

const initialState: IUserDetailsState = {
  userInfo: {
    avatar: '',
    name: '',
  } as UserInfoType
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails: (state: any, action: PayloadAction<UserInfoType>) => {
      state.userInfo = action.payload;
    },
    clearUserDetails: (state: any) => {
      state.userInfo = {
        avatar: '',
      };
    }
  },
});

export const { setUserDetails, clearUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
