"use client";

import { logout } from "@/app/(home)/login/action";
import { cn } from "@/lib/utils";
import React from "react";
import { Button, ButtonProps } from "../ui/button";
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

interface LogoutModalProps extends ButtonProps {}

export default function LogoutModal({ className, ...props }: LogoutModalProps) {
  const [isLogoutPending, startLogoutTransition] = React.useTransition();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    startLogoutTransition(async () => {
      await logout();
      setIsOpen(false);
    });
  };

  return (
    <Modal defaultOpen={isOpen} onOpenChange={setIsOpen} open={isOpen}>
      <ModalTrigger asChild>
        <Button
          className={cn("h-full w-full justify-start gap-2", className)}
          onClick={(event) => {
            event.preventDefault();
            setIsOpen(true);
          }}
          {...props}
        >
          <IconLogout />
          Log out
        </Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle className="text-destructive">Log out</ModalTitle>
          <ModalDescription>Are you sure you want to log out?</ModalDescription>
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
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Log out
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
