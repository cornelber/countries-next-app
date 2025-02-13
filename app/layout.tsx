import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/context/SessionProvider";

export const metadata: Metadata = {
  title: "Countries Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><SessionProvider>{children}</SessionProvider></body>
    </html>
  );
}
