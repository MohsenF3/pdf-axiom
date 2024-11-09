"use client";

import Logo from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import NavLinks from "./nav-links";

const NavSidebar = dynamic(() => import("./nav-sidebar"));

export default function Header() {
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 50], ["100%", "80%"]);
  const opacity = useTransform(scrollY, [0, 50], ["0", "1"]);
  const background = useTransform(scrollY, [0, 50], ["transparent", "#171717"]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[95%] max-w-7xl lg:w-full">
      {/* Desktop Navbar */}
      <DesktopNavbar background={background} opacity={opacity} width={width} />

      {/* Mobile Navbar */}
      <NavSidebar background={background} />
    </header>
  );
}

interface NavSidebarProps {
  background: MotionValue<string>;
  width: MotionValue<string>;
  opacity: MotionValue<string>;
}

function DesktopNavbar({ background, opacity, width }: NavSidebarProps) {
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
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "active:scale-[0.98]s font-medium hover:-translate-y-0.5",
            )}
          >
            Login
          </Link>
          <Link
            href="/"
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
