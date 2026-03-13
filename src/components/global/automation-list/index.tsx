"use client";
import { usePaths } from "@/hooks/use-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";

type Props = {};

const AutomationList = (props: Props) => {
  const { pathname } = usePaths();
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathname}/123`}
        className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold">
            Direct traffic towards website
          </h2>
          <p className="text-[#9B9CA0] text-sm font-light mb-2">
            via reply on story
          </p>
          <div className="flex gap-x-2 flex-wrap mt-3">
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                (0 + 1) % 1 == 0 &&
                  "bg-keyword-green/15 border-2 border-keyword-green",
                // (1 + 1) % 2 == 0 &&
                //   "bg-keyword-purple/15 border-2 border-keyword-purple",
                // (2 + 1) % 3 == 0 &&
                //   "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                // (3 + 1) % 4 == 0 &&
                //   "bg-keyword-red/15 border-2 border-keyword-red",
              )}
            >
              Yes
            </div>
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                // (0 + 1) % 1 == 0 &&
                //   "bg-keyword-green/15 border-2 border-keyword-green",
                (1 + 1) % 2 == 0 &&
                  "bg-keyword-purple/15 border-2 border-keyword-purple",
                // (2 + 1) % 3 == 0 &&
                //   "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                // (3 + 1) % 4 == 0 &&
                //   "bg-keyword-red/15 border-2 border-keyword-red",
              )}
            >
              Lets Go
            </div>
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                // (0 + 1) % 1 == 0 &&
                //   "bg-keyword-green/15 border-2 border-keyword-green",
                // (1 + 1) % 2 == 0 &&
                //   "bg-keyword-purple/15 border-2 border-keyword-purple",
                (2 + 1) % 3 == 0 &&
                  "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                // (3 + 1) % 4 == 0 &&
                //   "bg-keyword-red/15 border-2 border-keyword-red",
              )}
            >
              Interested
            </div>
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                // (0 + 1) % 1 == 0 &&
                //   "bg-keyword-green/15 border-2 border-keyword-green",
                // (1 + 1) % 2 == 0 &&
                //   "bg-keyword-purple/15 border-2 border-keyword-purple",
                // (2 + 1) % 3 == 0 &&
                //   "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                (3 + 1) % 4 == 0 &&
                  "bg-keyword-red/15 border-2 border-keyword-red",
              )}
            >
              Where do I start
            </div>
          </div>
          {/* <div className=" rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
            <p className="text-sm text-[#bfc0c3]">No keywords</p>
          </div> */}
        </div>
        <div className="flex flex-col justify-between">
          <p className="capitalize text-sm font-light text-[#9B9CA0]">
            March 12th 2026
          </p>
          <GradientButton
            type="BUTTON"
            className="w-full bg-background-80 text-white hover:bg-background-80"
          >
            Smart AI
          </GradientButton>
          {/* <Button className="bg-background-80 hover:bg-background-80 text-white">
            Standard
          </Button> */}
        </div>
      </Link>
    </div>
  );
};

export default AutomationList;
