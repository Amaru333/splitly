import React from "react";
import { DropdownProps } from "./DropdownInterface";

import UIDropdownStyle from "./UIDropdown.module.css";

function UIDropdown({ options, label, defaultSelected, warning, setValue }: DropdownProps) {
  return (
    <div>
      <div className="flex flex-row items-center mb-2">
        {label && <p>{label}</p>}
        {warning && <p className="ml-2 text-xs italic text-red-500">({warning})</p>}
      </div>
      <select className={UIDropdownStyle.select_container} defaultValue={defaultSelected} onChange={(e) => setValue(e.target.value)}>
        {options?.map((option_val, index) => (
          <option value={option_val.value} key={index}>
            {option_val.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UIDropdown;
