import axios from "axios";
import React, { useEffect, useState } from "react";
import { USERS_API } from "../../../../common/constants/apiConstants";

import DescriptionSectionStyles from "./DescriptionSection.module.css";

function DescriptionSection() {
  const [stats, setStats] = useState<any>();
  console.log(stats);

  useEffect(() => {
    axios
      .get(`${USERS_API}/stats`)
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={DescriptionSectionStyles.container}>
      <p className="text-white text-center px-12 text-xl drop-shadow-md">SplitLY allows you to split money when you go out with ur friends, and it will also calculate your expenses and tell you hope much you owe others and how much others owe you.</p>
      <div className="flex mt-12 text-2xl text-white">
        <p>{stats?.users[0]?.count} Users |&nbsp;</p>
        <p> {stats?.transactions[0]?.count} Transactions</p>
      </div>
    </div>
  );
}

export default DescriptionSection;
