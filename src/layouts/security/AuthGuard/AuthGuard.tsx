import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import UIModal from "../../../common/widgets/UIModal/UIModal";
import UILottiePlayer from "../../../common/widgets/UILottiePlayer/UILottiePlayer";

import { getUserDetails, getUserVerificationStatus, logUser } from "../../../redux/user/user";
import { useDispatch, useSelector } from "react-redux";

import { AuthGuardProps } from "./AuthGuardInterface";
import { verifyUser } from "./functions";
import VerifyMail from "./animations/verify-mail.json";

import AuthGuardStyles from "./AuthGuard.module.css";
import { resendVerification } from "../../../views/Homepage/components/FormSection/functions";

function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [clickedResendVerification, setClickedResendVerification] = useState<boolean>(false);

  const userVerificationStatus = useSelector(getUserVerificationStatus);
  const userDetails = useSelector(getUserDetails);

  const verify_token = () => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("token")) {
        router.push("/");
      } else {
        let token = JSON.parse(localStorage.getItem("token") || "{}");
        let user = JSON.parse(localStorage.getItem("user") || "{}");
        console.log(token, user, "TOKEN");
        verifyUser({ _id: user._id, token: token.token })
          .then((res) => {
            !res.data.logged ? router.push("/") : dispatch(logUser(res.data));
          })
          .catch((err) => {
            console.log(err);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            router.push("/");
          });
      }
    }
  };

  useEffect(() => {
    verify_token();
  }, []);

  const onResend = (id: string, email: string) => {
    resendVerification({ _id: id, email: email })
      .then((res) => res.status == 200 && setClickedResendVerification(true))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!userVerificationStatus && userDetails.logged && (
        <UIModal open={true} onClose={() => console.log()}>
          <div className="flex flex-col items-center justify-center max-w-screen-md">
            <div className="w-48">
              <UILottiePlayer animation={VerifyMail} />
            </div>
            <p className={AuthGuardStyles.modal_title}>Verify your email to continue</p>
            <p className="text-center mt-4 px-4">Please verify your email address by clicking the link before continuing to the website.</p>
            <p className="text-gray-500 text-xs text-center mt-4">
              {!clickedResendVerification ? (
                <>
                  Didn&apos;t receive the mail?{" "}
                  <span className="cursor-pointer underline" onClick={() => onResend(userDetails._id, userDetails.email)}>
                    Click here to resend
                  </span>
                </>
              ) : (
                <>Verification mail has been sent!</>
              )}
            </p>
          </div>
        </UIModal>
      )}
      {children}
    </>
  );
}

export default AuthGuard;
