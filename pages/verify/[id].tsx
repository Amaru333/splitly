import { useRouter } from "next/router";
import React from "react";
import VerifyPage from "../../src/views/VerifyPage/VerifyPage";

function Verify() {
  const router = useRouter();
  const { ex, id } = router.query;
  console.log(ex, id, "XEDES");
  return (
    <div>
      <VerifyPage />
    </div>
  );
}

export default Verify;
