"use client";

import LogoutModal from "@/components/dashboard/logout-modal";
import Logo from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSession } from "@/provider/session-provider";
import { MotionValue, motion } from "framer-motion";
import Link from "next/link";
import NavLinks from "./nav-links";

interface NavSidebarProps {
  background: MotionValue<string>;
  width: MotionValue<string>;
  opacity: MotionValue<string>;
}

export default function DesktopNavbar({
  background,
  opacity,
  width,
}: NavSidebarProps) {
  const { session } = useSession();

  return (
    <div className="hidden w-full lg:block">
      <motion.div
        className="relative mx-auto flex w-full justify-between rounded-md bg-transparent px-4 py-3 transition-all duration-500"
        style={{ width, background }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 h-full w-full rounded-md bg-muted/20 transition-all duration-500 [mask-image:linear-gradient(to_bottom,white,transparent,white)]"
          style={{ opacity }}
        ></motion.div>

        <div className="flex flex-row items-center gap-2">
          <Logo className="mr-4" />
          <NavLinks />
        </div>
        <div className="flex items-center space-x-2">
          {!session ? (
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "active:scale-[0.98]s font-medium hover:-translate-y-0.5",
              )}
            >
              Login
            </Link>
          ) : (
            <LogoutModal className="h-auto w-auto" variant="outline" />
          )}
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "gooeyLeft" }),
              "text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 active:scale-[0.98]",
            )}
          >
            Start for free
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
