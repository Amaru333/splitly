import Head from "next/head";
import React from "react";
import Headings from "../../common/components/headings/Headings";
import { TEXT_PROFILE_TITLE } from "../../common/constants/stringConstants";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function ProfilePage() {
  return (
    <div>
      <Head>
        <title>{TEXT_PROFILE_TITLE}</title>
      </Head>
      <div className="p-12 pt-8">
        <Headings>My Profile</Headings>
        <div>
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
