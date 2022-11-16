import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { LINK_ADD_ACTIVITY } from "../../../../common/constants/stringConstants";
import { toIndianSystem } from "../../../../common/functions/toIndianSystem";
import { getRecentActivity } from "./functions";

function ActiveSessions() {
  const router = useRouter();
  const [recentActivityData, setRecentActivityData] = useState([]);
  useEffect(() => {
    getRecentActivity()
      .then((res) => setRecentActivityData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-full">
      <div className="mb-4 flex flex-row items-center justify-between">
        <p className="text-3xl font-semibold">Active Sessions</p>
        <p className="text-xs text-pyel hover:opacity-60 cursor-pointer" onClick={() => router.push("/activity")}>
          View all
        </p>
      </div>
      {recentActivityData.length == 0 ? (
        <div className="flex flex-col justify-center items-center h-full w-full">
          <p className="text-xl text-gray-400 font-extralight">No Active Sessions currently</p>
          <p className="text-xs mt-1 underline cursor-pointer text-pyel" onClick={() => router.push(LINK_ADD_ACTIVITY)}>
            Click here to start a new one
          </p>
        </div>
      ) : (
        <>
          {recentActivityData.map((data: any) => (
            <div className="grid grid-cols-5">
              <div className="col-span-3 flex flex-col justify-center">
                <p className="text-lg font-semibold text-pyel">{data?.title}</p>
                <p className="text-sm">{data?.description}</p>
                <p className="text-xs text-gray-400">{data?.members?.length} Members</p>
              </div>
              <div className="col-span-2 flex flex-col justify-center items-end">
                <p className="text-xs text-gray-400">Cumulative spent:</p>
                <p className="text-xl font-semibold">₹{toIndianSystem(data?.group_spend)}</p>
                <p className="text-xs text-gray-400">Created: {moment(data?.createdAt).fromNow()}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ActiveSessions;
