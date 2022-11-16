import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { toIndianSystem } from "../../../../common/functions/toIndianSystem";
import UIProgress from "../../../../common/widgets/UIProgress/UIProgress";
import { getMonthlyLimit } from "../../../../redux/user/user";
import { LimitSectionProps } from "./LimitSectionInterface";

function LimitSection({ monthlySpent }: LimitSectionProps) {
  const router = useRouter();
  const monthlyLimit = useSelector(getMonthlyLimit);
  return (
    <div className="pr-4 h-full">
      <div className="mb-4 flex flex-row items-center justify-between">
        <p className="text-3xl font-semibold">Monthly Limit</p>
        <p className="text-xs text-pyel hover:opacity-60 cursor-pointer" onClick={() => router.push("/profile")}>
          Change Limit
        </p>
      </div>
      <div className="h-full flex flex-col">
        <div className="flex flex-row justify-between mb-2">
          <div className="text-center">
            <p className="text-sm text-gray-500">Spent</p>
            <span className="text-md">₹{toIndianSystem(monthlySpent)}</span>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Limit</p>
            <span className="text-md">₹{toIndianSystem(monthlyLimit)}</span>
          </div>
        </div>
        <div>
          <UIProgress value={monthlySpent} max={monthlyLimit} />
        </div>
      </div>
    </div>
  );
}

export default LimitSection;
