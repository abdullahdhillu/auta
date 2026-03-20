import React from "react";
import {
  ClerkLoading,
  SignIn,
  SignOutButton,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { User } from "lucide-react";
import Loader from "../loader";
import { Button } from "@/components/ui/button";

type Props = {};

const ClerkAuthState = () => {
  return (
    <>
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>
      <UserButton>
        <UserButton.UserProfileLink
          label="dashboard"
          url={"/dashboard"}
          labelIcon={<User size={16} />}
        />
      </UserButton>
    </>
  );
};

export default ClerkAuthState;
