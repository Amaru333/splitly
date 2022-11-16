import React from "react";

import { HeadingsProps } from "./HeadingsInterface";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import HeadingsStyle from "./Headings.module.css";
import { useRouter } from "next/router";

function Headings({ children, goBack }: HeadingsProps) {
  const router = useRouter();

  return (
    <div className={HeadingsStyle.container}>
      <div className={HeadingsStyle.icon_container}>
        {goBack && (
          <span className="cursor-pointer" onClick={() => router.back()}>
            <ArrowBackIosNewIcon />
          </span>
        )}
      </div>
      <p className={HeadingsStyle.title}>{children}</p>
    </div>
  );
}

export default Headings;
