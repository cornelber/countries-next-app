"use client";

import { MessageCircleHeart, Home, SearchCode, Settings, Workflow } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

interface SideLinksProps {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const items: SideLinksProps[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Countries",
    url: "#",
    icon: SearchCode,
  },
  {
    title: "Favorites",
    url: "#",
    icon: MessageCircleHeart,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { data: session } = useSession();
  
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <div className="flex items-center p-4">
          <Image
            src="https://placehold.co/40x40"
            alt="User Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <span className="text-sm font-semibold">
              {session?.user?.username || "User"}
            </span>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between">Actions <Workflow /></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="mr-2" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-col items-center p-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Log Out
          </Button>

          <span className="text-xs text-gray-500 mt-2">App version 0.1</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
