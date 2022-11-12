import React from "react";

function RecentTransactions() {
  return (
    <div className="h-full">
      <div className="mb-4 flex flex-row items-center justify-between">
        <p className="text-3xl font-semibold">Recent Transactions</p>
        <p className="text-xs text-pyel hover:opacity-60 cursor-pointer">View all</p>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <p className="text-xl text-gray-400 font-extralight">No Recent Transactions</p>
      </div>
    </div>
  );
}

export default RecentTransactions;
