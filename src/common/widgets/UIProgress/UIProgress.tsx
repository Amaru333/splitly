import React from "react";
import { UIProgressProps } from "./UIProgressInterface";

function UIProgress({ value, max }: UIProgressProps) {
  const percent = (value * 100) / max;
  const percent_abs = percent > 100 ? 100 : percent;
  return (
    <div className="w-full h-4 rounded-full bg-slate-200">
      <div className={`h-4 rounded-full`} style={{ width: `${percent_abs}%`, backgroundColor: "#ef971a" }}></div>
      {/* ${percent < 50 ? "bg-green-500" : percent < 80 ? "bg-orange-400" : "bg-red-700"} */}
    </div>
  );
}

export default UIProgress;
