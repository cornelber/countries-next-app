import PublicSection from "@/components/ui/section";
import { LoginForm } from "@/features/auth/LoginForm";

export default function LoginPage() {
  return (
    <PublicSection>
      <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
        Welcome Back!
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
        Sign in to explore countries and plan your next adventure.
      </p>
      <LoginForm />
    </PublicSection>
  );
}
