import React from "react";

export interface ButtonInterface {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "app-primary" | "app-secondary";
  width?: string;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
