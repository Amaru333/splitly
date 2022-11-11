import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import UILottiePlayer from "../../common/widgets/UILottiePlayer/UILottiePlayer";

import { verifyMail } from "./functions";
import Loading from "./animations/loading.json";
import Error from "./animations/error.json";
import Verified from "./animations/verified.json";
import { useDispatch } from "react-redux";
import { logUser } from "../../redux/user/user";

function VerifyPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const ex = router.query.ex as string;
  const id = router.query.id as string;

  const [verifying, setVerifying] = useState<string>("verifying");
  const [message, setMessage] = useState<string>("Verifying your email ID");

  const redirectVerifiedUser = () => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  useEffect(() => {
    if (!router.isReady) return;
    verifyMail(id, ex)
      .then((res) => {
        setVerifying("verified");
        setMessage("Verification completed. Please wait while we redirect you");
        redirectVerifiedUser();
        // dispatch(logUser(res.data));
      })
      .catch((err) => {
        console.log(err);
        setVerifying("error");
        setMessage(err.response.data.error.verification);
      });
  }, [router.isReady]);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="max-w-sm">{verifying == "verifying" ? <UILottiePlayer animation={Loading} /> : verifying == "verified" ? <UILottiePlayer animation={Verified} /> : <UILottiePlayer animation={Error} />}</div>
      <p className={`${verifying == "error" && "text-red-700"}`}>{message}</p>
    </div>
  );
}

export default VerifyPage;
