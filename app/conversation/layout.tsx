import ConversationHeader from "@/components/conversation/conversation-header";
import React from "react";

export default function ConversationLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="relative flex h-dvh w-full flex-col items-start overflow-hidden">
      <ConversationHeader />

      <main className="flex h-full w-full gap-0 lg:gap-10">{children}</main>
    </div>
  );
}
