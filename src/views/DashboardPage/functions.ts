import axios from "axios";
import { getAuthToken } from "../../common/functions/getAuthToken";
import { LIFETIME_SPENT_API, MONTHLY_SPENT_API } from "./constants";

export const getMonthlySpent = () => {
  return axios.get(MONTHLY_SPENT_API, { headers: getAuthToken() });
};

export const getLifetimeSpent = () => {
  return axios.get(LIFETIME_SPENT_API, { headers: getAuthToken() });
};
