import { auth } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthProtect({
  children,
}: React.PropsWithChildren) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
    return null;
  }

  return children;
}
