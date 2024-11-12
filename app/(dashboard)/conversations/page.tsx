import ConversationSkeleton from "@/components/conversations/conversation-skeleton";
import FetchConversations from "@/components/conversations/fetch-conversations";
import NewChatButton from "@/components/conversations/new-chat-button";
import PageHeader from "@/components/shared/page-header";
import { Suspense } from "react";

export default async function ConversationsPage() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <PageHeader
          title="Conversations"
          description="Chat with documents like pdf, docx, and docs"
        />
        <NewChatButton />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<ConversationSkeleton />}>
          <FetchConversations />
        </Suspense>
      </div>
    </>
  );
}
