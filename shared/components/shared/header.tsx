import React from "react";
import { cn } from "@/shared/lib/utils";

import { HeaderNavLinks } from "./header-nav-links";
import { Container } from "./container";
import { ThemeButton } from "./theme-button";

import Link from "next/link";
import { LoginButton } from "./login-button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    // todo: implement login modal and theme toggle button
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8 gap-4">
        <div className="flex items-end gap-8">
          <Link href="/">
            <h1 className="text-xl lowercase font-black hover:text-primary duration-200 ease-in-out">countrry.</h1>
          </Link>
          <HeaderNavLinks className="flex items-center gap-4" />
        </div>

        <div className="flex items-center gap-4">
          <LoginButton />
          <ThemeButton />
        </div>
      </Container>
    </header>
  );
};
