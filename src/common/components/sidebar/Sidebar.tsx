import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import SidebarStyles from "./Sidebar.module.css";

import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser } from "../../../redux/user/user";

function Sidebar() {
  const router = useRouter();
  const dispatch = useDispatch();

  const style = { fontSize: 24, transition: "0.3s" };
  const dashboard_items = [
    {
      title: "Dashboard",
      slug: "/dashboard",
      icon: <DashboardIcon sx={style} />,
    },
    {
      title: "Profile",
      slug: "/profile",
      icon: <AccountBoxIcon sx={style} />,
    },
    {
      title: "Notifications",
      slug: "/notifications",
      icon: <NotificationsIcon sx={style} />,
    },
  ];

  const onLogout = () => {
    dispatch(logoutUser());
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    router.push("/");
  };

  return (
    <div className={SidebarStyles.container}>
      <div className="mt-4">
        <div className="flex flex-col justify-center items-center my-6">
          {/* <p className={SidebarStyles.logo}>
            split
            <span className={SidebarStyles.dot}>LY.</span>
          </p> */}
          <img src="/assets/icons/logo-full.svg" className="px-4 w-48 py-4 cursor-pointer" onClick={() => router.push("/dashboard")} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            {dashboard_items.map((item, i) => (
              <div key={i} className={router.pathname == item.slug ? SidebarStyles.menu_active : SidebarStyles.menu_inactive} onClick={() => router.push(item.slug)}>
                {item.icon}
                <p className="ml-4">{item.title}</p>
              </div>
            ))}
          </div>
          <div className={SidebarStyles.menu_inactive} onClick={onLogout}>
            <LogoutIcon sx={style} />
            <p className="ml-4">Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
