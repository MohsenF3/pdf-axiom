import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDots } from "@/components/ui/icons";
import { Button } from "../ui/button";
import DeleteConversationButton from "./delete-conversation-button";

interface ConversationOptionsProps {
  conversationId: number;
}

export default function ConversationOptions({
  conversationId,
}: ConversationOptionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="data-[state=open]:bg-muted">
        <Button variant="ghost" size="icon" className="mr-1 rounded-md">
          <IconDots className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="min-w-[10rem]">
        <DropdownMenuItem className="p-0 hover:bg-sidebar-accent">
          <DeleteConversationButton conversationId={conversationId} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
