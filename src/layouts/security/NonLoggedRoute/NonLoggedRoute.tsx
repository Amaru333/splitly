import { useRouter } from "next/router";
import React from "react";

import { useSelector } from "react-redux";
import { getUserDetails } from "../../../redux/user/user";

import { NonLoggedRoutesProps } from "./NonLoggedRouteInterface";

function NonLoggedRoute({ children }: NonLoggedRoutesProps) {
  const router = useRouter();

  const userDetails = useSelector(getUserDetails);
  if (userDetails.logged) router.push("/dashboard");
  return <>{children}</>;
}

export default NonLoggedRoute;
