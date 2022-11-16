import Head from "next/head";
import React from "react";
import Headings from "../../../common/components/headings/Headings";
import { TEXT_ADD_TRANSACTIONS_TITLE } from "../../../common/constants/stringConstants";
import TransactionForm from "./TransactionForm/TransactionForm";

function AddTransactionsPage() {
  return (
    <div>
      <Head>
        <title>{TEXT_ADD_TRANSACTIONS_TITLE}</title>
      </Head>
      <div className="p-12 pt-8">
        <Headings goBack>Add Transactions</Headings>
        <div className="mt-8">
          <TransactionForm />
        </div>
      </div>
    </div>
  );
}

export default AddTransactionsPage;
