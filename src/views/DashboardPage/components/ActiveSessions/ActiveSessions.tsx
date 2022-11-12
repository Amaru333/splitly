import React from "react";

function ActiveSessions() {
  return (
    <div className="h-full">
      <div className="mb-4 flex flex-row items-center justify-between">
        <p className="text-3xl font-semibold">Active Sessions</p>
        <p className="text-xs text-pyel hover:opacity-60 cursor-pointer">View all</p>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <p className="text-xl text-gray-400 font-extralight">No Active Sessions currently</p>
        <p className="text-xs mt-1 underline cursor-pointer text-pyel">Click here to start a new one</p>
      </div>
    </div>
  );
}

export default ActiveSessions;
