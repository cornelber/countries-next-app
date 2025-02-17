"use client";

import React, { useState } from "react";
import { cn } from "@/shared/lib/utils";

import { HeaderNavLinks } from "./header-nav-links";
import { Container } from "./container";
import { ThemeButton } from "./theme-button";

import Link from "next/link";
import { LoginButton } from "./login-button";
import { AuthModal } from "./modals";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);


  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8 gap-4">
        <div className="flex items-end gap-8">
          <Link href="/">
            <h1 className="text-xl lowercase font-black hover:text-primary duration-200 ease-in-out">
              countrry.
            </h1>
          </Link>
          <HeaderNavLinks className="flex items-center gap-4" />
        </div>

        <div className="flex items-center gap-4">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />
          <LoginButton onClickSignIn={() => setOpenAuthModal(true)} />
          <ThemeButton />
        </div>
      </Container>
    </header>
  );
};
