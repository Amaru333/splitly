import { useRouter } from "next/router";
import React from "react";

import { useSelector } from "react-redux";
import { LINK_ADD_ACTIVITY, LINK_ADD_TRANSACTIONS } from "../../../../common/constants/stringConstants";
import { toClass } from "../../../../common/functions/toClass";
import { toIndianSystem } from "../../../../common/functions/toIndianSystem";
import UIButton from "../../../../common/widgets/UIButton/UIButton";
import { getUserDetails } from "../../../../redux/user/user";

import { getGreetings } from "./functions";

import GreetingSectionStyles from "./GreetingSection.module.css";
import { GreetingSectionProps } from "./GreetingSectionInterface";

function GreetingSection({ monthlySpent, lifetimeSpent }: GreetingSectionProps) {
  const router = useRouter();
  const userDetails = useSelector(getUserDetails);

  return (
    <div className={GreetingSectionStyles.container}>
      <div className={GreetingSectionStyles.headings}>
        <p>Good {getGreetings()},</p>
        <p className={GreetingSectionStyles.name}>{userDetails?.name}!</p>
      </div>
      <div className="mt-8">
        <div>
          <p className="text-sm text-gray-500">Due:</p>
          <p className="text-2xl">Yay! You dont owe money to anyone</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Rent:</p>
          <p className="text-2xl">Nobody owes you money for now</p>
        </div>
        <div className="mt-4 grid grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Total spent this month:</p>
            <p className="font-medium text-2xl flex flex-row items-start">
              <span className={GreetingSectionStyles.name}>₹&nbsp;</span>
              <span className={toClass(["text-4xl"])}>{toIndianSystem(monthlySpent)}</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Lifetime Spent:</p>
            <p className="font-medium text-2xl flex flex-row items-start">
              <span className={GreetingSectionStyles.name}>₹&nbsp;</span>
              <span className={toClass(["text-4xl"])}>{toIndianSystem(lifetimeSpent)}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full mt-8">
          <UIButton type="app-primary" style={{ padding: "8px 20px" }} onClick={() => router.push(LINK_ADD_ACTIVITY)}>
            Start Activity
          </UIButton>
          <UIButton type="app-secondary" style={{ marginLeft: "10%", width: "140px", padding: "8px 20px" }} onClick={() => router.push(LINK_ADD_TRANSACTIONS)}>
            Add Spend
          </UIButton>
        </div>
      </div>
    </div>
  );
}

export default GreetingSection;
