"use client";

import { SessionPayload } from "@/types";
import React from "react";

type SessionContextTypes = {
  session: SessionPayload | null;
};

export const SessionContext = React.createContext<
  SessionContextTypes | undefined
>(undefined);

export const useSession = () => {
  const sessionContext = React.useContext(SessionContext);

  if (!sessionContext) {
    throw new Error("useSession must be used within an SessionProvider.");
  }

  return sessionContext;
};

export const SessionProvider = ({
  session,
  children,
}: {
  session: SessionPayload | null;
  children: React.ReactNode;
}) => {
  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};
