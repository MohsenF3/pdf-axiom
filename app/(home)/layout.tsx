import Header from "@/components/layout/header";
import React from "react";

export default function NavbarLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}
