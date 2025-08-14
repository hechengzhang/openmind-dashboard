import { combineReducers } from "@reduxjs/toolkit";
import userDetailsReducer from "@/redux/userDetail/reducer";

export const rootReducers = combineReducers({
  userDetailsReducer,
});
