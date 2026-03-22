"use server";

import { redirect } from "next/navigation";

export const onOAuthInstagram = (strategy: "INSTAGRAM" | "CRM") => {
  if (strategy === "INSTAGRAM") {
    redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string);
  }
};
