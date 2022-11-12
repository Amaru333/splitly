import "../styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "../src/redux/store";

import { Analytics } from "@vercel/analytics/react";

import AppLayout from "../src/layouts/PageLayouts/AppLayout/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
        <Analytics />
      </AppLayout>
    </Provider>
  );
}
