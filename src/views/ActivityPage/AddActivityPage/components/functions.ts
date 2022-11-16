import axios from "axios";
import { ACTIVITY_API } from "../../../../common/constants/apiConstants";
import { getAuthToken } from "../../../../common/functions/getAuthToken";

//TODO:interface type and constants
export const sumbitActivity = (userData: any) => {
  return axios.post(`${ACTIVITY_API}`, userData, { headers: getAuthToken() });
};
