import axios from "axios";
import { getAuthToken } from "../../../../common/functions/getAuthToken";
import { TRANSACTION_API } from "./constants";
import { TransactionForm } from "./TransactionFormInterface";

export const submitTransaction = (userData: TransactionForm) => {
  return axios.post(TRANSACTION_API, userData, { headers: getAuthToken() });
};
