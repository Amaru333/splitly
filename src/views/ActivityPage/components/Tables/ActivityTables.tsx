import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toIndianSystem } from "../../../../common/functions/toIndianSystem";
import { getRecentActivity } from "../../../DashboardPage/components/ActiveSessions/functions";

function ActivityTables() {
  const router = useRouter();
  const [recentActivityData, setRecentActivityData] = useState([]);
  useEffect(() => {
    getRecentActivity()
      .then((res) => setRecentActivityData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full">
      {recentActivityData.map((data: any, i: any) => (
        <div className="grid grid-cols-12 cursor-pointer" onClick={() => router.push(`/activity/session/${data._id}`)} key={i}>
          <div className="col-span-8 flex flex-col justify-center">
            <p className="text-lg font-semibold text-pyel">{data?.title}</p>
            <p className="text-sm">{data?.description}</p>
            <p className="text-xs text-gray-400">{data?.members?.length} Members</p>
          </div>
          <div className="col-span-4 flex flex-col justify-center items-end">
            <p className="text-xs text-gray-400">Cumulative spent:</p>
            <p className="text-xl font-semibold">₹{toIndianSystem(data?.group_spend)}</p>
            <p className="text-xs text-gray-400">Created: {moment(data?.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityTables;
