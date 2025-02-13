import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import { signIn } from "next-auth/react";

export function useAuth() {
  const { toast } = useToast();
  const router = useRouter();

  const handleAuth = async (
    provider: "credentials" | "github",
    credentials?: { username: string; password: string }
  ) => {
    try {
      if (provider === "github") {
        await signIn("github", { callbackUrl: "/dashboard" });
        return;
      }

      const result = await signIn("credentials", {
        redirect: false,
        ...credentials,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      router.push("/dashboard");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unknown error occurred";

      toast({
        title: "Error",
        description: `Authentication failed: ${message}`,
        variant: "destructive",
      });
      return { error: message };
    }
  };

  return { handleAuth };
}
