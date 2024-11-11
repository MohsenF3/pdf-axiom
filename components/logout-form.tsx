import { logout } from "@/app/(home)/login/action";
import { cn } from "@/lib/utils";
import React from "react";

interface LogoutFormProps extends React.ComponentProps<"form"> {
  children: React.ReactNode;
}

export default function LogoutForm({
  children,
  className,
  ...props
}: LogoutFormProps) {
  return (
    <form action={logout} className={cn(className)} {...props}>
      {children}
    </form>
  );
}
