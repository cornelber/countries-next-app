"use client";
import { Button } from "@/components/ui/button";
import PublicSection from "@/components/ui/section";
import { LoginForm } from "@/features/auth/LoginForm";
import { useToast } from "@/hooks/use-toast";
import { Github, User2Icon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();

  const handleError = (value: string) => {
    if (value) {
      toast({
        title: "Error",
        description: value,
        variant: "destructive",
      });
    }
  };

  async function AuthWithTestUser() {
    try {
      handleError("");

      const result = await signIn<"credentials">("credentials", {
        redirect: false,
        username: "test",
        password: "testtest",
      });

      if (result?.error) {
        handleError("Invalid credentials");
        return;
      }

      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        handleError("Something went wrong. Please try again. " + err.message);
      } else {
        handleError("An unknown error occurred.");
      }
    }
  }

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
          <Button className="flex flex-wrap h-max" onClick={AuthWithTestUser}>
            {" "}
            <User2Icon />
            Sign in with Test User
          </Button>
          <Button className="flex flex-wrap h-max" variant={"secondary"}>
            {" "}
            <Github /> Sign in with Github
          </Button>
        </div>

        <LoginForm handleError={handleError} />
      </div>
    </PublicSection>
  );
}
