import React, { useState } from "react";
import { useRouter } from "next/router";

import { LoginForm, RegisterResponseData, SignUpForm, Tabs } from "./FormInterface";
import { loginUser, registerUser, resendVerification, updateEmail } from "./functions";
import MailSent from "./animations/mail_sent.json";

import { useDispatch } from "react-redux";
import { logUser } from "../../../../redux/user/user";

import UILottiePlayer from "../../../../common/widgets/UILottiePlayer/UILottiePlayer";
import UIModal from "../../../../common/widgets/UIModal/UIModal";
import UIButton from "../../../../common/widgets/UIButton/UIButton";
import UIInput from "../../../../common/widgets/UIInput/UIInput";

import { InputFieldProps } from "../../../../common/widgets/UIInput/InputInterface";

import FormSectionStyles from "./FormSection.module.css";

function FormSection() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [verificationModalOpen, setVerificationModalOpen] = useState<boolean>(false);
  const [clickedResendVerification, setClickedResendVerification] = useState<boolean>(false);
  const [clickedUpdateEmail, setClickedUpdateEmail] = useState<boolean>(false);

  const [selectedTab, setSelectedTab] = useState<Tabs>("sign up");
  const handleTabClick = (tab: Tabs) => {
    setSelectedTab(tab);
  };

  const [signUp, setSignUp] = useState<SignUpForm>({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [signIn, setSignIn] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [resData, setResData] = useState<RegisterResponseData>({
    _id: "",
    username: "",
    email: "",
  });
  const [newEmail, setNewEmail] = useState<string>("");
  const [newEmailError, setNewEmailError] = useState<string>("");

  const signUpFields: Array<InputFieldProps> = [
    {
      label: "full name",
      placeholder: "John Doe",
      name: "name",
      value: signUp.name,
      setValue: (v: string) => setSignUp({ ...signUp, name: v }),
    },
    {
      label: "username",
      name: "username",
      placeholder: "johndoe123",
      value: signUp.username,
      setValue: (v: string) => setSignUp({ ...signUp, username: v }),
    },
    {
      label: "email",
      name: "email",
      placeholder: "johndoe@email.com",
      value: signUp.email,
      setValue: (v: string) => setSignUp({ ...signUp, email: v }),
    },
    {
      label: "phone number",
      name: "phoneNumber",
      placeholder: "0123456789",
      value: signUp.phoneNumber,
      setValue: (v: number) => setSignUp({ ...signUp, phoneNumber: v.toString() }),
      type: "number",
    },
    {
      label: "password",
      name: "password",
      placeholder: "password",
      value: signUp.password,
      setValue: (v: string) => setSignUp({ ...signUp, password: v }),
      type: "password",
    },
  ];
  const signInFields: Array<InputFieldProps> = [
    {
      label: "email",
      name: "email",
      placeholder: "johndoe@email.com",
      value: signIn.email,
      setValue: (v: string) => setSignIn({ ...signIn, email: v }),
    },
    {
      label: "password",
      name: "password",
      placeholder: "password",
      value: signIn.password,
      setValue: (v: string) => setSignIn({ ...signIn, password: v }),
      type: "password",
    },
  ];

  const [signUpError, setSignUpError] = useState<SignUpForm>({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [loginError, setLoginError] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const clearForm = () => {
    selectedTab === "login"
      ? setSignIn({
          email: "",
          password: "",
        })
      : setSignUp({
          name: "",
          username: "",
          email: "",
          phoneNumber: "",
          password: "",
        });
  };

  const onRegister = () => {
    setSignUpError({
      name: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
    registerUser(signUp)
      .then((res) => {
        setResData(res.data.reg_res);
        setVerificationModalOpen(true);
      })
      .catch((err) => {
        setSignUpError({
          ...{
            name: "",
            username: "",
            email: "",
            phoneNumber: "",
            password: "",
          },
          ...err.response.data.error,
        });
      });
  };
  const onLogin = () => {
    setLoginError({
      email: "",
      password: "",
    });
    loginUser(signIn)
      .then((res) => {
        if (res.data.logged) {
          dispatch(logUser(res.data));
          if (typeof window !== "undefined") {
            localStorage.setItem("token", JSON.stringify({ token: res.headers["auth-token"] }));
            localStorage.setItem("user", JSON.stringify({ _id: res.data._id }));
          }
          router.push("/dashboard");
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        setLoginError({
          ...{
            email: "",
            password: "",
          },
          ...err.response.data.error,
        });
      });
  };
  const onResend = (id: string, email: string) => {
    resendVerification({ _id: id, email: email })
      .then((res) => res.status == 200 && setClickedResendVerification(true))
      .catch((err) => console.log(err));
  };
  const onUpdate = (id: string, email: string, newEmail: string) => {
    updateEmail({
      _id: id,
      email: email,
      new_email: newEmail,
    })
      .then((res) => res.status == 200 && setClickedUpdateEmail(true))
      .catch((err) => setNewEmailError(err.response.data.error.new_email));
  };

  return (
    <div className={FormSectionStyles.container}>
      <UIModal open={verificationModalOpen} onClose={() => console.log()}>
        {/* <UIModal open={true} onClose={() => console.log()}> */}
        <div className="flex flex-col items-center justify-center max-w-screen-md">
          <div className="w-48">
            <UILottiePlayer animation={MailSent} />
          </div>
          <div>
            <p className={FormSectionStyles.modal_title}>We&apos;ve sent you a verification mail</p>
            <p className="text-center mt-4 px-4">
              Please check your mail account <span className="font-medium">{resData.email}</span> and click the link sent to verify your email ID. The link will be valid for 30 minutes.
            </p>
            <p className="text-gray-500 text-xs text-center mt-4">
              {!clickedResendVerification ? (
                <>
                  Didn&apos;t receive the mail?{" "}
                  <span className="cursor-pointer underline" onClick={() => onResend(resData._id, resData.email)}>
                    Click here to resend
                  </span>
                </>
              ) : (
                <>Verification mail has been sent!</>
              )}
            </p>
          </div>
          <div className="w-full mt-6">
            <p className="text-center">Entered wrong email ID?</p>
            <div className="flex flex-row items-center">
              <div className="mt-2 mr-4 w-full">
                <UIInput placeholder="New email" value={newEmail} setValue={setNewEmail} warning={newEmailError} disabled={clickedUpdateEmail} />
              </div>
              <div>
                <UIButton type="secondary" disabled={clickedUpdateEmail} onClick={() => onUpdate(resData._id, resData.email, newEmail)}>
                  Send
                </UIButton>
              </div>
            </div>
            {clickedUpdateEmail && <p className="text-gray-500 text-xs text-center">Verification link has been sent to the new email ID</p>}
          </div>
        </div>
      </UIModal>
      <div className={FormSectionStyles.form_outer_container}>
        <div className={FormSectionStyles.titles}>
          <p onClick={() => handleTabClick("sign up")} className={selectedTab == "sign up" ? FormSectionStyles.selectedTab : FormSectionStyles.unselectedTab}>
            sign up
          </p>
          <p className={FormSectionStyles.separator}>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <p onClick={() => handleTabClick("login")} className={selectedTab == "login" ? FormSectionStyles.selectedTab : FormSectionStyles.unselectedTab}>
            login
          </p>
        </div>
        <div className={FormSectionStyles.form_container}>
          {selectedTab === "sign up" ? (
            <div className={FormSectionStyles.sign_up}>
              {signUpFields.map((field, index) => (
                <UIInput placeholder={field.placeholder} label={field.label} value={field.value} setValue={field.setValue} type={field.type} key={index} warning={signUpError[field.name as keyof SignUpForm]} />
              ))}
              <div className="flex flex-row w-full mt-8">
                <UIButton type="primary" width="50%" style={{ marginRight: "10px" }} onClick={onRegister}>
                  Register
                </UIButton>
                <UIButton type="secondary" width="50%" style={{ marginLeft: "10px" }} onClick={clearForm}>
                  Clear
                </UIButton>
              </div>
            </div>
          ) : (
            <div className={FormSectionStyles.sign_in}>
              {signInFields.map((field, index) => (
                <UIInput placeholder={field.placeholder} label={field.label} value={field.value} setValue={field.setValue} type={field.type} key={index} warning={loginError[field.name as keyof LoginForm]} />
              ))}
              <div className="flex flex-row w-full mt-8">
                <UIButton type="primary" width="50%" style={{ marginRight: "10px" }} onClick={onLogin}>
                  Login
                </UIButton>
                <UIButton type="secondary" width="50%" style={{ marginLeft: "10px" }} onClick={clearForm}>
                  Clear
                </UIButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormSection;
