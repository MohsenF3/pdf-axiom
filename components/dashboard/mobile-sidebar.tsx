import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../shared/logo";
import { IconFancyMenu } from "../ui/icons";
import Sidebar from "./sidebar";
import UserDetails from "./user-details";
import UserDropdownSidebar from "./user-dropdown-sidebar";

export default function MobileSidebar() {
  return (
    <div className="flex w-full items-center justify-between p-4 lg:hidden">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger>
            <IconFancyMenu className="size-7" />
          </SheetTrigger>
          <SheetContent className="w-auto p-0" side="left">
            <Sidebar />
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
