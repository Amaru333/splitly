import React from "react";
import type { AppProps } from "next/app";

import { Analytics } from "@vercel/analytics/react";

import { Provider } from "react-redux";
import { store } from "../src/redux/store";

import AppLayout from "../src/layouts/PageLayouts/AppLayout/AppLayout";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  // const initialLoad = getLocalStorageItems();
  // console.log(initialLoad, "initialLoad");

  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
        <Analytics />
      </AppLayout>
    </Provider>
  );
}
