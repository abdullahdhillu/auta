"use client";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subscription";
import React from "react";

const PaymentButton = () => {
  const { onSubscribe, isProcessing } = useSubscription();
  return (
    <Button className="bg-gradient-to-br text-white rounded-full from-[#9685DB] via-[#9434E6] font-bold to-[#CC3BD4]">
      Upgrade
    </Button>
  );
};

export default PaymentButton;
