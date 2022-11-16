import axios from "axios";
import { getAuthToken } from "../../../common/functions/getAuthToken";
import { UPDATE_LIMIT_USER_API } from "./constants";

export const updateUserSpendLimit = (newLimit: number) => {
  return axios.patch(UPDATE_LIMIT_USER_API, { monthly_limit: newLimit }, { headers: getAuthToken() });
};
