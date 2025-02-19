import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { Title } from "../../../title";
import { FormInput } from "../../../form";
import { Button } from "@/shared/components/ui";
import { useRouter } from "next/navigation";

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const router = useRouter();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });


      if (!res?.ok) {
        throw new Error("Failed to sign in with credentials");
      }
      router.replace("/dashboard");

      toast.success("You have successfully logged into your account.", {
        icon: "✅",
      });

      onClose?.();
    } catch (error) {
      console.error("Error [LOGIN]", error);
      toast.error("Failed to log in to your account", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
            <div className="mr-2">
                <Title text="Login to your account" size="md" className="font-bold" />
                <p className="text-gray-400">Enter your username to log into your account</p>
            </div>
        </div>

        <FormInput name="username" label="Username" required />
        <FormInput name="password" label="Password" type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          Log in
        </Button>
        
      </form>
    </FormProvider>
  );
};
