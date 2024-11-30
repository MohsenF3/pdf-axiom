import { Chat } from "@prisma/client";
import ConversationItem from "./conversation-item";

interface ConversationItemsProps {
  conversations: Chat[];
}

export default function ConversationItems({
  conversations,
}: ConversationItemsProps) {
  if (!conversations?.length) return null;

  return (
    <div className="space-y-3">
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          id={conversation.id}
          createdAt={conversation.createdAt}
          documentKey={conversation.documentKey}
        />
      ))}
    </div>
  );
}
