export interface SignUpForm {
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterResponseData {
  _id: string;
  username: string;
  email: string;
}

export interface ResendVerificationData {
  _id: string;
  email: string;
}

export interface UpdateEmailData {
  _id: string;
  email: string;
  new_email: string;
}

export type Tabs = "login" | "sign up";
