
import { prisma } from "@/prisma/prisma-client";
import { TestSignOut } from "@/shared/components/shared/test-sign-out";
import { getUserSession } from "@/shared/lib/get-user-session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getUserSession();

  if (!session || !session.id) {
    return redirect("/not-auth");
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(session.id) },
  });

  if (!user) {
    return redirect("/not-auth");
  }

  return (
    <>
      Dashboard Page, hello {user.username}{" "}
      <TestSignOut />
    </>
  );
}
