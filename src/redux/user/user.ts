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
    monthly_limit: 0,
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
    changeMonthlyLimit: (state, value) => {
      state.data.monthly_limit = value.payload;
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

export const getMonthlyLimit = createSelector(
  (state: any) => state.user,
  (user) => user.data.monthly_limit
);

export default userSlice.reducer;
