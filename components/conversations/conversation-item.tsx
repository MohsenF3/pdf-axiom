import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconConversation, IconDots } from "@/components/ui/icons";
import { formatDateTime } from "@/lib/formatter";
import { Chat } from "@prisma/client";
import Link from "next/link";
import DeleteConversationButton from "./delete-conversation-button";

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

interface ConversationOptionsProps {
  conversationId: number;
}

function ConversationOptions({ conversationId }: ConversationOptionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="data-[state=open]:bg-muted">
        <Button variant="ghost" size="icon" className="mr-1 rounded-md">
          <IconDots className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="min-w-[10rem]">
        <DropdownMenuLabel asChild>
          <DeleteConversationButton conversationId={conversationId} />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
