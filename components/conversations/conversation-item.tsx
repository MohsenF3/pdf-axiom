import { getDocument } from "@/app/(dashboard)/documents/actions";
import { IconConversation, IconDots } from "@/components/ui/icons";
import { formatDateTime } from "@/lib/formatter";
import { Chat } from "@prisma/client";
import Link from "next/link";
import { Button } from "../ui/button";

type ConversationItemProps = Omit<Chat, "userId">;

export default async function ConversationItem({
  id,
  createdAt,
  documentKey,
}: ConversationItemProps) {
  const { data } = await getDocument(documentKey!);
  const formattedTime = formatDateTime(createdAt);

  return (
    <div className="flex items-center justify-between border-b pb-3 transition-all hover:border-primary-high">
      <Link
        href={`/conversations/${data?.fileKey}`}
        className="flex w-full items-start gap-5 py-2"
      >
        <IconConversation className="mt-1 size-5 text-muted-foreground" />

        <div className="flex w-full flex-col justify-between gap-2">
          <p className="font-semibold">{data?.pdfName}</p>
          <p className="text-xs text-muted-foreground">{formattedTime}</p>
        </div>
      </Link>

      <Button variant="ghost" size="icon" className="mr-1 rounded-md">
        <IconDots className="size-6" />
      </Button>
    </div>
  );
}
