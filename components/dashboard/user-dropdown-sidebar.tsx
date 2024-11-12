import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import React from "react";
import LogoutForm from "../logout-form";
import { Button } from "../ui/button";
import { IconLogout, IconSetting } from "../ui/icons";
import UserDetails from "./user-details";

interface UserDropdownSidebarProps extends React.ComponentProps<"button"> {
  trigger: React.ReactNode;
  side: "top" | "right" | "bottom" | "left";
}

export default function UserDropdownSidebar({
  trigger,
  side,
  className,
  ...props
}: UserDropdownSidebarProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "data-[state=open]:text-sidebar-accent-foreground flex w-full items-center justify-between rounded-md p-0 hover:bg-sidebar-accent data-[state=open]:bg-sidebar-accent lg:p-2",
          className,
        )}
        {...props}
      >
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="ml-1 min-w-56 rounded-md"
        side={side}
        align="end"
      >
        <DropdownMenuLabel className="flex items-center gap-2 p-0 px-1 py-1.5 text-left text-sm font-normal">
          <UserDetails />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-sidebar-accent">
          <IconSetting />
          Setting
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="hover:bg-sidebar-accent">
          <LogoutForm>
            <Button
              type="submit"
              className="h-full w-full justify-start gap-2 bg-transparent p-0 text-sidebar-foreground hover:bg-none hover:ring-0"
            >
              <IconLogout />
              Log out
            </Button>
          </LogoutForm>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
