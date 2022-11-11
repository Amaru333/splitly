import Head from "next/head";
import React from "react";

import { TEXT_APP_NAME } from "../../common/constants/stringConstants";
import { toClass } from "../../common/functions/toClass";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import FormSection from "./components/FormSection/FormSection";

import HomepageStyles from "./Homepage.module.css";

function Homepage() {
  return (
    <div>
      <Head>
        <title>{TEXT_APP_NAME}</title>
      </Head>
      <div className={toClass([HomepageStyles.container, "grid grid-cols-2 mx-0"])}>
        <div className={HomepageStyles.description_section}>
          <DescriptionSection />
        </div>
        <div>
          <FormSection />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
