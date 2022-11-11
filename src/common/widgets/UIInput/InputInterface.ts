import React from "react";

export interface InputInterface {
  label?: string;
  placeholder: string;
  defaultValue?: string;
  type?: string;
  value: string;
  setValue: React.SetStateAction<any>;
  warning?: string;
  [x: string]: any;
}

export interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: any) => void;
  type?: string;
  name: string;
}
