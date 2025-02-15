"use client";

import { MessageCircleHeart, Home, SearchCode, Settings, Workflow } from "lucide-react";
import { signOut } from "next-auth/react";
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
import { User } from "next-auth";

interface SideLinksProps {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const items: SideLinksProps[] = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Countries",
    url: "/dashboard/country",
    icon: SearchCode,
  },
  {
    title: "Favorites",
    url: "/dashboard/favorite",
    icon: MessageCircleHeart,
  },
  {
    title: "Settings",
    url: "/dashboard/setting",
    icon: Settings,
  },
];

export function AppSidebar({user}:{user:User}) {
  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <div className="flex items-center p-4">
          IM
          <div className="ml-3">
            <span className="text-sm font-semibold">
              {user?.username || "User"}
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
