import Head from "next/head";
import React, { useEffect, useState } from "react";

import Headings from "../../common/components/headings/Headings";
import { TEXT_DASHBOARD_TITLE } from "../../common/constants/stringConstants";
import ActiveSessions from "./components/ActiveSessions/ActiveSessions";
import GraphSection from "./components/GraphSection/GraphSection";

import GreetingSection from "./components/GreetingSection/GreetingSection";
import LimitSection from "./components/LimitSection/LimitSection";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
import { getLifetimeSpent, getMonthlySpent } from "./functions";

function DashboardPage() {
  const [monthlySpent, setMonthlySpent] = useState<number>(0);
  const [lifetimeSpent, setLifetimeSpent] = useState<number>(0);

  useEffect(() => {
    getMonthlySpent().then((res) => {
      setMonthlySpent(res.data[0]?.amount_spent || 0);
    });
    getLifetimeSpent().then((res) => {
      setLifetimeSpent(res.data[0]?.total || 0);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>{TEXT_DASHBOARD_TITLE}</title>
      </Head>
      <div className="p-12 pt-8">
        <Headings>Dashboard</Headings>
        <div className="grid grid-cols-3">
          <div className="col-span-1 flex flex-col justify-center">
            <GreetingSection monthlySpent={monthlySpent} lifetimeSpent={lifetimeSpent} />
          </div>
          <div className="col-span-2 mx-12 my-8">
            <div>
              <GraphSection />
            </div>
          </div>
          <div className="col-span-1 my-12 py-12">
            <LimitSection monthlySpent={monthlySpent} />
          </div>
          <div className="col-span-1 my-12 py-12 px-8">
            <ActiveSessions />
          </div>
          <div className="col-span-1 my-12 py-12 px-8">
            <RecentTransactions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
