import React from "react";
import UIProgress from "../../../../common/widgets/UIProgress/UIProgress";

function LimitSection() {
  return (
    <div className="pr-4 h-full">
      <div className="mb-4 flex flex-row items-center justify-between">
        <p className="text-3xl font-semibold">Monthly Limit</p>
        <p className="text-xs text-pyel hover:opacity-60 cursor-pointer">Change Limit</p>
      </div>
      <div className="h-full flex flex-col">
        <div className="flex flex-row justify-between mb-2">
          <div className="text-center">
            <p className="text-sm text-gray-500">Spent</p>
            <span className="text-md">₹2,013.00</span>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Limit</p>
            <span className="text-md">₹5,000.00</span>
          </div>
        </div>
        <div>
          <UIProgress value={90} max={100} />
        </div>
      </div>
    </div>
  );
}

export default LimitSection;
