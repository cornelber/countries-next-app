"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "./loginSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


interface LoginFormProps {
  handleError: (message: string) => void;
}

export function LoginForm({handleError} : LoginFormProps) {
  const router = useRouter();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginSchemaType) {
    try {
      handleError("");

      const result = await signIn<"credentials">("credentials", {
        redirect: false,
        username: values.username,
        password: values.password
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-6"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="pb-2">
                <FormLabel className="text-gray-700 dark:text-gray-300">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary"
                    type="text"
                    placeholder="johndoe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary"
                    type="password"
                    placeholder="••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-md">
          Sign In
        </Button>
      </form>
    </Form>
  );
}
