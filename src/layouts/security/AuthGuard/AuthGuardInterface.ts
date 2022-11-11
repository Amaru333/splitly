import React from "react";

export interface AuthGuardProps {
  children: React.ReactNode;
}

export interface VerifyTokenParam {
  _id: string;
  token: string;
}
