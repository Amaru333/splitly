import axios from "axios";
import { getAuthToken } from "../../../../common/functions/getAuthToken";
import { GRAPH_DATA_API } from "./constants";

export const getGraphData = () => {
  return axios.get(GRAPH_DATA_API, { headers: getAuthToken() });
};
