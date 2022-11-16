import axios from "axios";
import { ACTIVITY_API } from "../../../../common/constants/apiConstants";
import { getAuthToken } from "../../../../common/functions/getAuthToken";

export const getRecentActivity = () => {
  return axios.get(`${ACTIVITY_API}?limit=5`, { headers: getAuthToken() });
};
