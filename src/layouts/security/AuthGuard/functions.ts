import axios from "axios";

import { VerifyTokenParam } from "./AuthGuardInterface";

import { VERIFY_TOKEN_API } from "./contants";

export const verifyUser = (auth: VerifyTokenParam) => {
  const headers = {
    "auth-token": auth.token,
  };
  return axios.get(`${VERIFY_TOKEN_API}/${auth._id}`, { headers: headers });
};
