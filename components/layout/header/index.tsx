"use client";

import { useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const DesktopNavbar = dynamic(() => import("./desktop-nav"), {
  ssr: false,
});
const NavSidebar = dynamic(() => import("./nav-sidebar"), {
  ssr: false,
});

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
