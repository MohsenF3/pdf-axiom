import Logo from "@/components/shared/logo";
import { IconMenu } from "@/components/ui/icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, MotionValue } from "framer-motion";
import NavLinks from "./nav-links";

interface NavSidebarProps {
  background: MotionValue<string>;
}

export default function NavSidebar({ background }: NavSidebarProps) {
  return (
    <div className="block lg:hidden">
      <motion.div
        className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 shadow-xl transition duration-300"
        style={{ background }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <Logo className="mr-4" />
        <Sheet>
          <SheetTrigger>
            <IconMenu className="size-6" />
          </SheetTrigger>
          <SheetContent className="pt-16">
            <NavLinks />
          </SheetContent>
        </Sheet>
      </motion.div>
    </div>
  );
}
