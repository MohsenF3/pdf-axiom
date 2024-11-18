"use client";

import { SessionPayload } from "@/types";
import React from "react";
import { SessionProvider } from "./session-provider";

interface ProvidersProps extends React.PropsWithChildren {
  session: SessionPayload | null;
}

export function Providers({ children, session }: ProvidersProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
