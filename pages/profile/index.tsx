import { useRouter } from "next/router";
import React from "react";

function Profile() {
  const router = useRouter();
  return (
    <div>
      <div onClick={() => router.push("/dashboard")}>Profile</div>
      <div onClick={() => router.push("/")}>home</div>
    </div>
  );
}

export default Profile;
