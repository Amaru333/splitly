import Head from "next/head";
import React from "react";
import Headings from "../../common/components/headings/Headings";
import { TEXT_ACTIVITY_TITLE } from "../../common/constants/stringConstants";
import TransactionTables from "./components/Tables/TransactionTables";
import Titles from "./components/Titles/Titles";

function ActivityPage() {
  return (
    <div>
      <Head>
        <title>{TEXT_ACTIVITY_TITLE}</title>
      </Head>
      <div className="p-12 pt-8">
        <Headings>Activity</Headings>
        <div className="mt-8">
          <Titles />
          <TransactionTables />
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
