import Header from "@/components/layout/header";
import dynamic from "next/dynamic";
import React from "react";

const Footer = dynamic(() => import("@/components/layout/footer"));

export default function NavbarLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
