import React, { useEffect, useState } from "react";
import { getRecentTransactions } from "./functions";

import moment from "moment";
import { RecentTransactionDataInterface } from "../../../DashboardPage/components/RecentTransactions/RecentTransactionsInterface";
import ActivityTables from "./ActivityTables";

function TransactionTables() {
  const [recentTransactionData, setRecentTransactionData] = useState<Array<RecentTransactionDataInterface>>([]);
  useEffect(() => {
    getRecentTransactions()
      .then((res) => setRecentTransactionData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-16 mt-8">
      <div className="flex flex-row">
        <ActivityTables />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-center h-full w-full">
          {recentTransactionData.length == 0 ? (
            <p className="text-xl text-gray-400 font-extralight">No Recent Transactions</p>
          ) : (
            <div className="flex flex-col w-full">
              {recentTransactionData?.map((data, i) => (
                <div key={i} className="w-full grid grid-cols-7 gap-3 py-4 border-b">
                  <div className="col-span-1 flex flex-row items-center justify-center">
                    <img src={`/assets/icons/${data.spend_type}.png`} className="w-12" />
                  </div>
                  <div className="col-span-4 flex flex-col justify-center">
                    <p className="text-lg font-semibold text-pyel">{data.title}</p>
                    <p className="text-sm">{data.description}</p>
                  </div>
                  <div className="col-span-2 flex flex-col justify-center items-end">
                    <p className="text-xl font-semibold">₹{data.amount_spent}</p>
                    <p className="text-xs text-gray-400">{moment(data.createdAt).fromNow()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionTables;
