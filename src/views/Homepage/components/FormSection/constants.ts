import { USERS_API } from "../../../../common/constants/apiConstants";

//API endpoints
export const REGISTER_USER_API: string = USERS_API + "/register";
export const LOGIN_USER_API: string = USERS_API + "/login";
export const RESEND_MAIL_API: string = USERS_API + "/resend-verification";
export const UPDATE_MAIL_API: string = USERS_API + "/update-address";
