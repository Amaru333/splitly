import { useRouter } from "next/router";
import React, { useState } from "react";
import UIButton from "../../../../common/widgets/UIButton/UIButton";
import UIDropdown from "../../../../common/widgets/UIDropdown/UIDropdown";
import UIInput from "../../../../common/widgets/UIInput/UIInput";
import UIMultilineInput from "../../../../common/widgets/UIMultilineInput/UIMultilineInput";
import { submitTransaction } from "./functions";

function TransactionForm() {
  const router = useRouter();
  const spend_type = [
    {
      value: "travel",
      label: "Travel",
    },
    {
      value: "food",
      label: "Food",
    },
    {
      value: "shopping",
      label: "Shopping",
    },
    {
      value: "bills",
      label: "Bills",
    },
    {
      value: "others",
      label: "Others",
    },
  ];
  const [data, setData] = useState({
    amount: "",
    title: "",
    description: "",
    spend_type: spend_type[0].value,
  });
  const onSubmit = () => {
    submitTransaction({
      amount_spent: parseInt(data.amount),
      title: data.title,
      description: data.description,
      spend_type: data.spend_type,
    })
      .then((res) => router.push("/activity"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-screen-md px-8">
      <UIInput type="number" value={data.amount} setValue={(v: string) => setData({ ...data, amount: v })} placeholder="100.00" label="Amount spent" />
      <UIInput value={data.title} setValue={(v: string) => setData({ ...data, title: v })} placeholder="Title" label="Title" />
      <UIMultilineInput value={data.description} setValue={(v: string) => setData({ ...data, description: v })} placeholder="Description" label="Description" />
      <UIDropdown label="Spend type" options={spend_type} defaultSelected={spend_type[0].value} setValue={(v: string) => setData({ ...data, spend_type: v })} />
      <UIButton type="app-primary" style={{ marginTop: "2rem", padding: "10px 40px" }} onClick={onSubmit}>
        Submit
      </UIButton>
    </div>
  );
}

export default TransactionForm;
