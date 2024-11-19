"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "../shared/logo";
import { buttonVariants } from "../ui/button";
import { IconArrowRight } from "../ui/icons";

export default function ConversationHeader() {
  const targetLink = "/conversations";

  return (
    <header className="flex h-16 w-full items-center gap-2 border-b p-4 lg:p-8">
      <NavigationLink target={targetLink} />
      <Logo />
    </header>
  );
}

function NavigationLink({ target }: { target: string }) {
  return (
    <Link
      href={target}
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "icon",
          className: "rotate-180 rounded-md",
        }),
      )}
    >
      <IconArrowRight />
    </Link>
  );
}
