"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { DASHBOARD_SIDEBAR_LINKS } from "@/lib/placeholder";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/provider/sidebar-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

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
