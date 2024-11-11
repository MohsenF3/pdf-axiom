"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { IconConversation, IconDocuments, IconHelp } from "../ui/icons";

const DASHBOARD_SIDEBAR_LINKS = [
  {
    id: 1,
    name: "Conversation",
    url: "/conversations",
    Icon: IconConversation,
  },
  {
    id: 2,
    name: "Documents",
    url: "/documents",
    Icon: IconDocuments,
  },
  { id: 3, name: "Help & Support", url: "/support", Icon: IconHelp },
];

export default function DashboardSidebarLinks() {
  const pathname = usePathname();

  return (
    <div className="mt-5 space-y-2">
      {DASHBOARD_SIDEBAR_LINKS.map(({ Icon, id, name, url }) => (
        <Link
          key={id}
          href={url}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-full items-center justify-start gap-2 ps-3 hover:bg-sidebar-accent",
            pathname === url && "bg-sidebar-accent",
          )}
        >
          <Icon className="size-5" />
          {name}
        </Link>
      ))}
    </div>
  );
}
