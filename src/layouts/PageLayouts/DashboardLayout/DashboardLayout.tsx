import React from "react";
import Sidebar from "../../../common/components/sidebar/Sidebar";

import { DashboardLayoutProps } from "./DashboardLayoutInterface";

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
