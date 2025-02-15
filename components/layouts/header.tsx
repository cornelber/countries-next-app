"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

interface NavLinksProps {
  href: string;
  label: string;
}

const navLinks: NavLinksProps[] = [
  { href: "/explore", label: "explore." },
  { href: "/about", label: "about." },
  { href: "/contact", label: "contact." },
];

function HeaderSideNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={`${buttonVariants()} sm:hidden flex justify-self-end w-min`}>
          <AlignJustify />
      </SheetTrigger>
      <SheetContent className="w-screen flex flex-col justify-between">

        <SheetHeader className="relative flex items-center justify-center">
          <SheetTitle>
            <Link
              href="/"
              className={`${buttonVariants({
                variant: "link",
              })} text-lg absolute left-1/2 transform -translate-x-1/2`}
              onClick={() => setOpen(false)}
            >
              countrry.
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-6 text-center mt-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-lg font-medium hover:underline"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Button className="w-full mt-8" onClick={() => setOpen(false)}>
          <Link href="/login">Get Started</Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}

export default function Header() {
  return (
    <header className="fixed w-screen backdrop-blur-md">
      <div className="p-5 grid grid-cols-2 sm:grid-cols-3 items-center">
        {/* Logo */}
        <div className="text-left">
          <Link
            href="/"
            className={`${buttonVariants({ variant: "link" })} text-lg`}
          >
            countrry.
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden sm:flex gap-6 justify-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={buttonVariants({ variant: "link" })}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <HeaderSideNav />

        {/* Login Button (Desktop) */}
        <div className="hidden sm:flex justify-self-end">
          <Button>
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
