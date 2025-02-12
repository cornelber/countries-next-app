import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
    return <>404 Not Found <Link href="/" className={buttonVariants()}>Go to home</Link></>
}