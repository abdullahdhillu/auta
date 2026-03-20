import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  const user = await onBoardUser();
  if (user.status === 200 || user.status === 201) {
    const first = user.data?.firstName ?? "";
    const last = user.data?.lastName ?? "";
    return redirect(`/dashboard/${first}${last}`);
  }

  return redirect("/sign-in");
};

export default Page;
