import Head from "next/head";
import React from "react";

import Headings from "../../common/components/headings/Headings";
import { TEXT_DASHBOARD_TITLE } from "../../common/constants/stringConstants";
import ActiveSessions from "./components/ActiveSessions/ActiveSessions";
import GraphSection from "./components/GraphSection/GraphSection";

import GreetingSection from "./components/GreetingSection/GreetingSection";
import LimitSection from "./components/LimitSection/LimitSection";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";

function DashboardPage() {
  return (
    <div>
      <Head>
        <title>{TEXT_DASHBOARD_TITLE}</title>
      </Head>
      <div className="p-12 pt-8">
        <Headings>Dashboard</Headings>
        <div className="grid grid-cols-3">
          <div className="col-span-1 flex flex-col justify-center">
            <GreetingSection />
          </div>
          <div className="col-span-2 mx-12 my-8">
            <div>
              <GraphSection />
            </div>
          </div>
          <div className="col-span-1 my-12 py-12">
            <LimitSection />
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
