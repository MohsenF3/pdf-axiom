"use client";

import { deleteConversation } from "@/app/(dashboard)/conversations/actions";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "../ui/dialog";
import { IconTrashcan } from "../ui/icons";

interface DeleteConversationButtonProps {
  conversationId: number;
}

export default function DeleteConversationButton({
  conversationId,
}: DeleteConversationButtonProps) {
  const [isRemovePending, startRemoveTransition] = React.useTransition();
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    startRemoveTransition(async () => {
      const { message, status } = await deleteConversation(conversationId);

      // redirect user to login page if not logged in
      if (status === 401) {
        toast.error(message);
        router.replace("/login");
        return;
      }

      // if some error occurred in server while deleting the conversation
      if (status === 500) {
        toast.error(message);
        return;
      }

      setIsOpen(false);
      toast.success(message);
    });
  };

  return (
    <Modal defaultOpen={isOpen} open={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger asChild>
        <Button
          variant="ghost"
          className="h-full w-full justify-start gap-2 text-destructive hover:text-destructive"
          onClick={(event) => {
            event.preventDefault();
            setIsOpen(true);
          }}
        >
          <IconTrashcan className="size-5 text-destructive" />
          Delete
        </Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Delete Conversation</ModalTitle>
          <ModalDescription>
            Are you sure you want to delete this conversation?
          </ModalDescription>
        </ModalHeader>

        <ModalFooter>
          <Button
            variant="ghost"
            className="border"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="loading"
            onClick={handleDelete}
            disabled={isRemovePending}
            pending={isRemovePending}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
