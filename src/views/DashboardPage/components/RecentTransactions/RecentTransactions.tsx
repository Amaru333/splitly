import React, { useEffect, useState } from "react";
import { getRecentTransactions } from "./functions";
import { RecentTransactionDataInterface } from "./RecentTransactionsInterface";

import moment from "moment";
import { useRouter } from "next/router";
import { toIndianSystem } from "../../../../common/functions/toIndianSystem";

function RecentTransactions() {
  const router = useRouter();
  const [recentTransactionData, setRecentTransactionData] = useState<Array<RecentTransactionDataInterface>>([]);
  useEffect(() => {
    getRecentTransactions()
      .then((res) => setRecentTransactionData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-full">
      <div className="mb-4 flex flex-row items-center justify-between">
        <p className="text-3xl font-semibold">Recent Transactions</p>
        <p className="text-xs text-pyel hover:opacity-60 cursor-pointer" onClick={() => router.push("/activity")}>
          View all
        </p>
      </div>
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
                  <p className="text-xl font-semibold">₹{toIndianSystem(data.amount_spent)}</p>
                  <p className="text-xs text-gray-400">{moment(data.createdAt).fromNow()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentTransactions;
