import React from "react";

export interface ModalInterface {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}
