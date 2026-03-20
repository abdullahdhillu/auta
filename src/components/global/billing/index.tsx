"use client";
import React from "react";
import PaymentCard from "./payment-card";
import { useQueryUser } from "@/hooks/user-queries";
import { SubscriptionPlan } from "../subscription-plan";
import UpgradeCrad from "../sidebar/upgrade";

type Props = {};

const Billing = (props: Props) => {
  const { data } = useQueryUser();

  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      <PaymentCard current={data?.data?.subscription?.plan!} label="PRO" />
      <PaymentCard current={data?.data?.subscription?.plan!} label="FREE" />
      <SubscriptionPlan type="FREE">
        <div className="flex-1 flex flex-col justify-end">
          <UpgradeCrad />
        </div>
      </SubscriptionPlan>
    </div>
  );
};

export default Billing;
