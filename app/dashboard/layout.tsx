"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { CountryProvider } from "@/context/CountryProvider";
import { useSession } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  return (
    <SidebarProvider>
      <CountryProvider>
        <div className="flex h-screen w-full flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <AppSidebar user={session?.user} />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
        <Toaster />
      </CountryProvider>
    </SidebarProvider>
  );
}
