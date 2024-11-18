import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDots } from "@/components/ui/icons";
import { Button } from "../ui/button";
import DeleteConversationButton from "./delete-document-button";

interface DocumentListDropdownProps {
  documentId: number;
}

export default function DocumentListDropdown({
  documentId,
}: DocumentListDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="data-[state=open]:bg-muted" asChild>
        <Button variant="ghost" size="icon" className="mr-1 rounded-md">
          <IconDots className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="min-w-[10rem]">
        <DropdownMenuItem className="p-0 hover:bg-sidebar-accent">
          <DeleteConversationButton documentId={documentId} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
