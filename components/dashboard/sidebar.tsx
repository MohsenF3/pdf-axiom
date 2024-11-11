import { cn } from "@/lib/utils";
import React from "react";
import Logo from "../shared/logo";
import { IconDots } from "../ui/icons";
import DashboardSidebarLinks from "./dashboard-sidebar-links";
import UserDetails from "./user-details";
import UserDropdownSidebar from "./user-dropdown-sidebar";

interface SidebarProps extends React.ComponentProps<"div"> {}

export default function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex h-dvh w-[300px] flex-col items-start justify-between bg-sidebar-background px-2 py-5 text-sidebar-foreground lg:w-[272px]",
        className,
      )}
      {...props}
    >
      {/* top section */}
      <div className="w-full">
        <Logo className="ms-1 inline-flex" />

        {/* links */}
        <DashboardSidebarLinks />
      </div>

      {/* bottom section */}
      <div className="hidden w-full lg:block">
        <UserDropdownSidebar
          side="right"
          trigger={
            <>
              <UserDetails />
              <IconDots className="ml-auto size-4" />
            </>
          }
        />
      </div>
    </div>
  );
}
