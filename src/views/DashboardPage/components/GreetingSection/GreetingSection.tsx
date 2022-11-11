import React from "react";

import { useSelector } from "react-redux";
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
    </div>
  );
}

export default GreetingSection;
