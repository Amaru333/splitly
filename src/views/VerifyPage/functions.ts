import axios from "axios";
import { VERIFY_MAIL_API } from "./contants";

export const verifyMail = (id: string, expiry: string) => {
  console.log(id, expiry);
  return axios.patch(`${VERIFY_MAIL_API}`, {
    expiry: expiry,
    _id: id,
  });
};
