import axios from "axios";
import { getAuthToken } from "../../../../common/functions/getAuthToken";
import { TRANSACTION_API } from "../../../ActivityPage/AddTransactionsPage/TransactionForm/constants";

export const getRecentTransactions = () => {
  return axios.get(`${TRANSACTION_API}?limit=20`, { headers: getAuthToken() });
};
