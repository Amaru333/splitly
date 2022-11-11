import React from "react";

import { ModalInterface } from "./UIModalInterface";

import UIModalStyles from "./UIModal.module.css";

import { Modal } from "@mui/material";

function UIModal({ children, open, onClose }: ModalInterface) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={UIModalStyles.container}>{children}</div>
    </Modal>
  );
}

export default UIModal;
