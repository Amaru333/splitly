import axios from "axios";

import { LoginForm, ResendVerificationData, SignUpForm, UpdateEmailData } from "./FormInterface";

import { LOGIN_USER_API, REGISTER_USER_API, RESEND_MAIL_API, UPDATE_MAIL_API } from "./constants";

export const registerUser = (userData: SignUpForm) => {
  return axios.post(REGISTER_USER_API, userData);
};

export const loginUser = (userData: LoginForm) => {
  return axios.post(LOGIN_USER_API, userData);
};

export const resendVerification = (resendData: ResendVerificationData) => {
  return axios.post(RESEND_MAIL_API, resendData);
};

export const updateEmail = (updateData: UpdateEmailData) => {
  return axios.patch(UPDATE_MAIL_API, updateData);
};
