"use client";

import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";
import { Button, ButtonProps } from "../../ui/button";
import { IconUpload } from "../../ui/icons";
import FileUpload from "./file-upload";

interface UploadModalProps extends ButtonProps {}

export default function UploadModal({ className, ...props }: UploadModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal defaultOpen={isOpen} onOpenChange={setIsOpen} open={isOpen}>
      <ModalTrigger asChild>
        <Button
          variant="gooeyLeft"
          className={cn("gap-1", className)}
          {...props}
        >
          <IconUpload className="size-5" />
          Upload
        </Button>
      </ModalTrigger>
      <ModalContent
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <ModalHeader className="mb-5">
          <ModalTitle>Upload Documents</ModalTitle>
          <ModalDescription>Drop your files here.</ModalDescription>
        </ModalHeader>

        <FileUpload onClose={closeModal} />
      </ModalContent>
    </Modal>
  );
}
