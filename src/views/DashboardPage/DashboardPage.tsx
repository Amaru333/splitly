import Head from "next/head";
import React from "react";

import Headings from "../../common/components/headings/Headings";
import { TEXT_DASHBOARD_TITLE } from "../../common/constants/stringConstants";

import GreetingSection from "./components/GreetingSection/GreetingSection";

function DashboardPage() {
  return (
    <div>
      <Head>
        <title>{TEXT_DASHBOARD_TITLE}</title>
      </Head>
      <div className="p-12 pt-8">
        <Headings>Dashboard</Headings>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <GreetingSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
