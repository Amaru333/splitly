import React from "react";

import { toClass } from "../../functions/toClass";

import { ButtonInterface } from "./ButtonInterface";

import UIButtonStyles from "./UIButton.module.css";

function UIButton({ children, onClick, type, width = "fit-content", style, disabled = false }: ButtonInterface) {
  return (
    <button className={toClass([UIButtonStyles.button, type == "primary" ? UIButtonStyles.primary : UIButtonStyles.secondary])} style={{ width: width, ...style }} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default UIButton;
