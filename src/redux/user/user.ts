import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  data: {
    logged: null,
    _id: "",
    phoneNumber: "",
    email: "",
    name: "",
    username: "",
    verified: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state, value) => {
      state.data = value.payload;
    },
    logoutUser: (state) => {
      state.data = initialState.data;
    },
  },
});

export const { logUser, logoutUser } = userSlice.actions;

export const getUserDetails = createSelector(
  (state: any) => state.user,
  (user) => user.data
);

export const getUserVerificationStatus = createSelector(
  (state: any) => state.user,
  (user) => user.data.verified
);

export default userSlice.reducer;
