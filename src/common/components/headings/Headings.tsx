import React from "react";

import { HeadingsProps } from "./HeadingsInterface";

import HeadingsStyle from "./Headings.module.css";

function Headings({ children }: HeadingsProps) {
  return (
    <div className={HeadingsStyle.container}>
      <p className={HeadingsStyle.title}>{children}</p>
    </div>
  );
}

export default Headings;
