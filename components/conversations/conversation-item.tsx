import { IconConversation } from "@/components/ui/icons";
import { formatDateTime } from "@/lib/formatter";
import { Chat } from "@prisma/client";
import Link from "next/link";
import ConversationOptions from "./conversation-options";

type ConversationItemProps = Omit<Chat, "userId" | "pdfUrl">;

export default function ConversationItem({
  id,
  createdAt,
  fileKey,
  pdfName,
}: ConversationItemProps) {
  const formattedTime = formatDateTime(createdAt);

  return (
    <div className="flex items-center justify-between border-b pb-3 transition-all hover:border-primary-high">
      <Link
        href={`/conversations/${fileKey}`}
        className="flex w-full items-start gap-5 py-2"
      >
        <IconConversation className="mt-1 size-5 text-muted-foreground" />

        <div className="flex w-full flex-col justify-between gap-2">
          <p className="font-semibold">{pdfName}</p>
          <p className="text-xs text-muted-foreground">{formattedTime}</p>
        </div>
      </Link>

      <ConversationOptions conversationId={id} />
    </div>
  );
}
