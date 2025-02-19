'use client'

import { cn } from "@/shared/lib/utils";
import { Home, MessageCircleHeart, SearchCode, Settings } from "lucide-react";
import React from "react";
import { LogoutButton } from "../logout-button";
import { ThemeButton } from "../theme-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    url: "/dashboard/countries",
    icon: SearchCode,
  },
  {
    title: "Favorites",
    url: "/dashboard/favorites",
    icon: MessageCircleHeart,
  },
  {
    title: "Settings",
    url: "/dashboard/setting",
    icon: Settings,
  },
];

interface Props {
  className?: string;
  username: string;
}

export const SideNav: React.FC<Props> = ({ className, username }) => {
  const pathname = usePathname();
  
  return (
    <div className={cn("border-r h-full flex flex-col gap-4 p-4", className)}>
      <div className="">
        <h1 className="text-xl lowercase font-black hover:text-primary duration-200 ease-in-out cursor-default">
          countrry.
        </h1>
      </div>

      <div className="border p-3 rounded-lg bg-primary text-white shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-white rounded-full bg-gray-300 overflow-hidden">
            
          </div>
          <div>
            <span className="text-lg font-semibold">{username}</span>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col gap-2">
        {items.map((item, index) => (
          <Link key={index} href={item.url} className={cn(
            "flex items-center gap-2 p-2 rounded-md ",
            pathname === item.url ? "bg-primary text-white" : "text-gray-800 hover:bg-gray-100"
          )}>
            <item.icon  className={cn(
            "w-5 h-5 text-primary",
            pathname === item.url ? "text-white" : "text-gray-800"
          )} />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>

      <div className="flex gap-2">
        <LogoutButton className="flex-grow" />
        <ThemeButton />
      </div>
    </div>
  );
};
