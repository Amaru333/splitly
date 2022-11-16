import { useRouter } from "next/router";
import React from "react";
import { LINK_ADD_ACTIVITY, LINK_ADD_TRANSACTIONS } from "../../../../common/constants/stringConstants";
import UIButton from "../../../../common/widgets/UIButton/UIButton";

function Titles() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 gap-16">
      <div className="flex flex-row justify-between items-center">
        <p className="text-2xl font-semibold">Recent Activities</p>
        <UIButton type="app-primary" style={{ padding: "8px 20px" }} onClick={() => router.push(LINK_ADD_ACTIVITY)}>
          Start New Activity
        </UIButton>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-2xl font-semibold">Recent Transactions</p>
        <UIButton type="app-secondary" style={{ padding: "8px 20px" }} onClick={() => router.push(LINK_ADD_TRANSACTIONS)}>
          Add New Transaction
        </UIButton>
      </div>
    </div>
  );
}

export default Titles;
