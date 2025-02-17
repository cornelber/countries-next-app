import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const navLinks: string[] = ["about", "contact"];

export const HeaderNavLinks: React.FC<Props> = ({ className }) => {
  return (
    <nav className={cn("", className)}>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={`/${link}`}
          className="relative lowercase hover:text-primary"
        >
          <span className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-primary before:scale-x-0 before:origin-left before:transition-transform before:duration-200 before:ease-in-out hover:before:scale-x-100">
            {link}
          </span>
        </Link>
      ))}
    </nav>
  );
};
