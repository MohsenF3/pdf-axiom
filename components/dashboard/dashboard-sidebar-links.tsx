"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/provider/sidebar-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { IconConversation, IconDocuments } from "../ui/icons";

const DASHBOARD_SIDEBAR_LINKS = [
  {
    id: 1,
    name: "Conversations",
    url: "/conversations",
    Icon: IconConversation,
  },
  {
    id: 2,
    name: "Documents",
    url: "/documents",
    Icon: IconDocuments,
  },
];

export default function DashboardSidebarLinks() {
  const pathname = usePathname();
  const { setValue } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 1024px)");

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
          // only in mobile devices user can close the sidebar
          {...(isMobile ? { onClick: () => setValue(false) } : null)}
        >
          <Icon className="size-5" />
          {name}
        </Link>
      ))}
    </div>
  );
}
