"use client";
import { Button } from "@/components/ui/button";
import PublicSection from "@/components/ui/section";
import { LoginForm } from "@/features/auth/LoginForm";
import { useAuth } from "@/hooks/use-auth";
import { Github, User2Icon } from "lucide-react";

export default function LoginPage() {
  const { handleAuth } = useAuth();

  return (
    <PublicSection>
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
          Welcome Back!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
          Sign in to explore countries and plan your next adventure.
        </p>
        <div className="grid grid-cols-2 gap-6 px-6">
          <Button
            className="flex flex-wrap h-max"
            onClick={() =>
              handleAuth("credentials", {
                username: "test",
                password: "testtest",
              })
            }
          >
            <User2Icon />
            Sign in with Test User
          </Button>
          <Button
            className="flex flex-wrap h-max"
            variant={"secondary"}
            onClick={() => handleAuth("github")}
          >
            <Github /> Sign in with Github
          </Button>
        </div>

        <LoginForm />
      </div>
    </PublicSection>
  );
}
