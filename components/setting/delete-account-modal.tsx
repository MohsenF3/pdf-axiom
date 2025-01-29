"use client";

import { deleteAccount } from "@/app/(dashboard)/setting/action";
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
import { IconLogout } from "../ui/icons";

export default function DeleteAccountModal() {
  const [isLogoutPending, startLogoutTransition] = React.useTransition();
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const handleLogout = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    startLogoutTransition(async () => {
      const response = await deleteAccount();

      if (response.type === "error") {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);
      router.replace("/login");
      setIsOpen(false);
    });
  };

  return (
    <Modal defaultOpen={isOpen} onOpenChange={setIsOpen} open={isOpen}>
      <ModalTrigger asChild>
        <div className="flex w-full justify-end">
          <Button
            variant="ghost"
            className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90 sm:w-auto"
            onClick={(event) => {
              event.preventDefault();
              setIsOpen(true);
            }}
          >
            <IconLogout />
            Delete my account
          </Button>
        </div>
      </ModalTrigger>
      <ModalContent
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <ModalHeader>
          <ModalTitle className="text-destructive">
            Are you sure you want to delete your account?
          </ModalTitle>
          <ModalDescription>
            This action is irreversible and will permanently delete all your
            data, including documents, chats, and personal information. If you
            are certain, please confirm your decision below.
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
            disabled={isLogoutPending}
            pending={isLogoutPending}
            onClick={handleLogout}
            className="border border-destructive bg-transparent text-destructive hover:bg-transparent"
          >
            Confirm Deletion
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
