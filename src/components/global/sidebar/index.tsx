"use client";
import { usePaths } from "@/hooks/use-nav";
import { LogoSmall } from "@/svgs/logo-small";
import React from "react";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { SubscriptionPlan } from "../subscription-plan";
import UpgradeCrad from "./upgrade";
import Image from "next/image";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();
  return (
    <div className="w-[250px] border-[1px] radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl">
        <div className="flex gap-x-2 items-center p-5 justify-center">
          {/* <LogoSmall /> */}
          <aside className="flex items-center gap-[2px]">
            <p className="text-3xl font-bold">Au</p>
            <Image
              src="/fuzzieLogo.png"
              width={15}
              height={15}
              alt="fuzzie logo"
              className="shadow-sm"
            />
            <p className="text-3xl font-bold">ta</p>
          </aside>
        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <Separator orientation="horizontal" className="bg-[#5C5C5F]" />
        </div>
        <div className="px-3 flex flex-colgap-y-5">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <p className="text-[9B9CA0]">Profile</p>
          </div>
          <div className="flex gap-x-3"></div>
        </div>
        <SubscriptionPlan>
          <div className="flex-1 flex flex-col justify-end">
            <UpgradeCrad />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
