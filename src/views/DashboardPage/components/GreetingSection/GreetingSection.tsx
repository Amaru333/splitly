import React from "react";

import { useSelector } from "react-redux";
import { toClass } from "../../../../common/functions/toClass";
import { getUserDetails } from "../../../../redux/user/user";

import { getGreetings } from "./functions";

import GreetingSectionStyles from "./GreetingSection.module.css";

function GreetingSection() {
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
              <span className={toClass(["text-4xl"])}>2,013.00</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Lifetime Spent:</p>
            <p className="font-medium text-2xl flex flex-row items-start">
              <span className={GreetingSectionStyles.name}>₹&nbsp;</span>
              <span className={toClass(["text-4xl"])}>12,013.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreetingSection;
