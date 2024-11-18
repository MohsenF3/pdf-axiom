"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSidebar } from "@/provider/sidebar-provider";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import React from "react";
import Logo from "../shared/logo";
import { IconFancyMenu } from "../ui/icons";
import UserDetails from "./user-details";
import UserDropdownSidebar from "./user-dropdown-sidebar";

interface MobileSidebarProps extends React.PropsWithChildren {}

export default function MobileSidebar({ children }: MobileSidebarProps) {
  const { isSidebarOpen, setValue } = useSidebar();

  return (
    <div className="flex w-full items-center justify-between p-4 lg:hidden">
      <div className="flex items-center gap-2">
        <Sheet
          defaultOpen={isSidebarOpen}
          onOpenChange={setValue}
          open={isSidebarOpen}
        >
          <SheetTrigger>
            <IconFancyMenu className="size-7" />
          </SheetTrigger>
          <SheetContent className="w-auto p-0" side="left">
            <VisuallyHidden.Root>
              <SheetTitle>Sidebar</SheetTitle>
            </VisuallyHidden.Root>
            <VisuallyHidden.Root>
              <SheetDescription>Sidebar description</SheetDescription>
            </VisuallyHidden.Root>

            {children}
          </SheetContent>
        </Sheet>

        <Logo className="pl-0" />
      </div>

      <UserDropdownSidebar
        className="inline-flex w-auto"
        trigger={<UserDetails withDetails={false} />}
        side="bottom"
      />
    </div>
  );
}
