import Head from "next/head";
import React from "react";
import Headings from "../../../common/components/headings/Headings";
import { TEXT_ADD_ACTIVITY_TITLE } from "../../../common/constants/stringConstants";
import ActivityForm from "./components/ActivityForm";

function AddActivityPage() {
  return (
    <div>
      <Head>
        <title>{TEXT_ADD_ACTIVITY_TITLE}</title>
      </Head>
      <div className="p-12 pt-8">
        <Headings goBack>Add Activity</Headings>
        <div className="mt-8">
          <ActivityForm />
        </div>
      </div>
    </div>
  );
}

export default AddActivityPage;
