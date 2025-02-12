import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed w-screen bg-slate-200">
      <div className="p-5 grid grid-cols-3">
        <div className="logo">
          <Link
            href="/"
            className={`${buttonVariants({ variant: "link" })} text-lg`}
          >
            countrry.
          </Link>
        </div>
        <div className="">
          <ul className="grid grid-cols-3">
            <li>
              <Link
                href="/explore"
                className={buttonVariants({ variant: "link" })}
              >
                explore.
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={buttonVariants({ variant: "link" })}
              >
                about.
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "link" })}
              >
                contact.
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <Button>
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
