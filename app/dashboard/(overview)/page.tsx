"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? <h1>Welcome, {session.user.username}!</h1> : <p>Loading...</p>}
      <Button onClick={() => signOut({ callbackUrl: "/login" })}>
        Log out
      </Button>
    </div>
  );
}
