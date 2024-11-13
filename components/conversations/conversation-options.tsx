"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDots } from "@/components/ui/icons";
import React from "react";
import { Button } from "../ui/button";
import DeleteConversationButton from "./delete-conversation-button";

interface ConversationOptionsProps {
  conversationId: number;
}

export default function ConversationOptions({
  conversationId,
}: ConversationOptionsProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeDropdown = () => setIsOpen(false);

  return (
    <DropdownMenu defaultOpen={isOpen} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild className="data-[state=open]:bg-muted">
        <Button
          variant="ghost"
          size="icon"
          className="mr-1 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <IconDots className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="min-w-[10rem]">
        <DropdownMenuItem asChild>
          <DeleteConversationButton
            conversationId={conversationId}
            closeDropdown={closeDropdown}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
