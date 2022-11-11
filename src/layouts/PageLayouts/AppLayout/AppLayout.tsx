import React from "react";
import { useRouter } from "next/router";

import { AppLayoutProps } from "./AppLayoutInterface";

import NonLoggedRoute from "../../security/NonLoggedRoute/NonLoggedRoute";
import AuthGuard from "../../security/AuthGuard/AuthGuard";
import { verifyUser } from "../../security/AuthGuard/functions";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, logUser } from "../../../redux/user/user";
import DashboardLayout from "../DashboardLayout/DashboardLayout";

function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const userDetails = useSelector(getUserDetails);

  if (typeof window !== "undefined") {
    if (localStorage.getItem("token") && !userDetails.logged) {
      let token = JSON.parse(localStorage.getItem("token") || "{}");
      let user = JSON.parse(localStorage.getItem("user") || "{}");
      verifyUser({ _id: user._id, token: token.token })
        .then((res) => {
          !res.data.logged ? router.push("/") : dispatch(logUser(res.data));
        })
        .catch((err) => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          router.push("/");
          console.log(err);
        });
    }
  }
  if (router.pathname == "/verify/[id]") return children;
  if (router.pathname == "/") return <NonLoggedRoute>{children}</NonLoggedRoute>;
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}

export default AppLayout;
