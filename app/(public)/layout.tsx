import type { Metadata } from "next";
import Header from "@/components/layouts/header";

export const metadata: Metadata = {
  title: "Countries Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-32">{children}</main>
    </>
  );
}
