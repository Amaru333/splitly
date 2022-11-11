import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../src/layouts/PageLayouts/AppLayout/AppLayout";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

import React, { useEffect } from "react";
import { verifyUser } from "../src/layouts/security/AuthGuard/functions";
import { logUser } from "../src/redux/user/user";
export default function App({ Component, pageProps }: AppProps) {
  // const initialLoad = getLocalStorageItems();
  // console.log(initialLoad, "initialLoad");

  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
