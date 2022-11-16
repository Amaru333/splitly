import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toIndianSystem } from "../../../common/functions/toIndianSystem";
import UIInput from "../../../common/widgets/UIInput/UIInput";
import { getUserDetails, logUser } from "../../../redux/user/user";
import { updateUserSpendLimit } from "./functions";

function ProfileInfo() {
  const dispatch = useDispatch();
  const [changeLimit, setChangeLimit] = useState<boolean>(false);
  const userDetails = useSelector(getUserDetails);
  const [monthlyLimitValue, setMonthlyLimitValue] = useState<number>(0);
  useEffect(() => {
    setMonthlyLimitValue(userDetails.monthly_limit);
  }, [userDetails]);
  const updateUserLimit = () => {
    updateUserSpendLimit(monthlyLimitValue)
      .then((res) => dispatch(logUser(res.data)))
      .catch((err) => console.log(err));
    setChangeLimit(false);
  };
  return (
    <div className="max-w-screen-sm pt-16 m-auto text-lg">
      <div className="grid grid-cols-3 py-4">
        <p className="col-span-1 text-pyel font-semibold">Name</p>
        <p className="col-span-2">{userDetails.name}</p>
      </div>
      <div className="grid grid-cols-3 py-4">
        <p className="col-span-1 text-pyel font-semibold">Username</p>
        <p className="col-span-2">{userDetails.username}</p>
      </div>
      <div className="grid grid-cols-3 py-4">
        <p className="col-span-1 text-pyel font-semibold">Email</p>
        <p className="col-span-2">{userDetails.email}</p>
      </div>
      <div className="grid grid-cols-3 py-4">
        <p className="col-span-1 text-pyel font-semibold">Phone Number</p>
        <p className="col-span-2">{userDetails.phoneNumber}</p>
      </div>
      <div className="grid grid-cols-3 py-4 items-center">
        <p className="col-span-1 text-pyel font-semibold">Monthly Limit</p>
        {!changeLimit ? <p className="col-span-1">₹ {toIndianSystem(monthlyLimitValue)}</p> : <UIInput type="number" value={monthlyLimitValue} setValue={(v: string) => setMonthlyLimitValue(parseInt(v))} />}
        {!changeLimit ? (
          <p className="col-span-1 text-xs text-gray-400 cursor-pointer hover:text-gray-300" onClick={() => setChangeLimit(true)}>
            Change limit
          </p>
        ) : (
          <p className="col-span-1 text-xs text-gray-400 cursor-pointer hover:text-gray-300" onClick={updateUserLimit}>
            Set Limit
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;
