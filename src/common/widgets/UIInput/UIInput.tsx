import React from "react";
import { InputInterface } from "./InputInterface";

import UIInputStyles from "./UIInput.module.css";

function UIInput({ label, placeholder, defaultValue, type = "text", value, setValue, warning, ...rest }: InputInterface) {
  return (
    <div className="mb-4">
      <div className="flex flex-row items-center mb-2">
        {label && <p>{label}</p>}
        {warning && <p className="ml-2 text-xs italic text-red-500">({warning})</p>}
      </div>
      <input className={UIInputStyles.input_box} placeholder={placeholder} type={type} value={value} onChange={(e) => setValue(e.target.value)} {...rest} />
    </div>
  );
}

export default UIInput;
