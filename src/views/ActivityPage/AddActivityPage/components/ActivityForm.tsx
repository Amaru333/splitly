import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UIButton from "../../../../common/widgets/UIButton/UIButton";
import UIInput from "../../../../common/widgets/UIInput/UIInput";
import UIMultilineInput from "../../../../common/widgets/UIMultilineInput/UIMultilineInput";
import { getUserDetails } from "../../../../redux/user/user";
import { sumbitActivity } from "./functions";

function ActivityForm() {
  const [numberOfMembers, setNumberOfMembers] = useState<number>(1);
  const userDetails = useSelector(getUserDetails);
  const [members, setMembers] = useState<any>([]);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  let arr: any = [];
  useEffect(() => {
    arr[0] = {
      email: userDetails.email,
    };
    setMembers(arr);
  }, [userDetails]);
  const onSubmit = () => {
    sumbitActivity({
      title: data.title,
      description: data.description,
      members: members,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  console.log(data, members);
  return (
    <div className="max-w-screen-md px-8">
      <UIInput value={data.title} setValue={(v: string) => setData({ ...data, title: v })} placeholder="Travelling with friends, Night out..." label="Title" />
      <UIMultilineInput value={data.description} setValue={(v: string) => setData({ ...data, description: v })} placeholder="Description" label="Description" />
      <UIInput value={members[0]?.email} setValue={(v: string) => setData({ ...data, title: v })} label={`Your email ID`} disabled={true} />
      {Array(numberOfMembers)
        .fill("")
        .map((n, i) => (
          <div key={i} className="flex flex-row w-full">
            <div className="flex-1">
              <UIInput
                value={members[i + 1]?.email}
                setValue={(v: string) => {
                  let a = members.slice();
                  a[i + 1] = {
                    email: v,
                  };
                  setMembers(a);
                }}
                placeholder="name@mail.com"
                label={`Friend #${i + 1} email ID`}
              />
            </div>
            {i + 1 == numberOfMembers && (
              <div className="flex flex-col justify-center pt-4 pl-4 cursor-pointer" onClick={() => setNumberOfMembers(numberOfMembers + 1)}>
                <img src="/assets/icons/add.png" className="w-8" />
              </div>
            )}
          </div>
        ))}
      <UIButton type="app-primary" style={{ marginTop: "2rem", padding: "10px 40px" }} onClick={onSubmit}>
        Submit
      </UIButton>
    </div>
  );
}

export default ActivityForm;
