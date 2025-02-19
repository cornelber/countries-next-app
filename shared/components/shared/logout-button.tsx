"use client"

import React from "react";
import { Button } from "../ui";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface Props {
  className?: string;
}

export const LogoutButton: React.FC<Props> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Button onClick={() => signOut({callbackUrl: '/'})} variant={"outline"} className="text-sm font-thin w-full">
        <LogOut />
        Sign out
      </Button>
    </div>
  );
};
