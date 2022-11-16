import React from "react";
import { InputInterface } from "./MultilineInputInterface";

import UIMultilineInputStyles from "./UIMultilineInput.module.css";

function UIMultilineInput({ label, placeholder, defaultValue, value, setValue, warning, ...rest }: InputInterface) {
  return (
    <div className="mb-4">
      <div className="flex flex-row items-center mb-2">
        {label && <p>{label}</p>}
        {warning && <p className="ml-2 text-xs italic text-red-500">({warning})</p>}
      </div>
      <textarea className={UIMultilineInputStyles.input_box} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} {...rest} rows={5} />
    </div>
  );
}

export default UIMultilineInput;
