export interface DropdownProps {
  options: Array<DropdownOptionsObject>;
  label?: string;
  defaultSelected?: string | number;
  warning?: string;
  setValue: React.SetStateAction<any>;
}

export interface DropdownOptionsObject {
  value: string | number;
  label: string;
}
