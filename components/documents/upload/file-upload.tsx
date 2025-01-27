"use client";

import GridPattern from "@/components/grid-pattern";
import { useUploadThing } from "@/lib/upload/uploadthing";
import { cn } from "@/lib/utils";
import { useDropzone } from "@uploadthing/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import {
  generateClientDropzoneAccept,
  generatePermittedFileTypes,
} from "uploadthing/client";
import FileCard from "./file-card";
import UploadArea from "./upload-area";
import UploadStatus from "./upload-status";
interface FileUploadProps {
  onClose: () => void;
}

export default function FileUpload({ onClose }: FileUploadProps) {
  const [progress, setProgress] = React.useState(0);
  const [controller, setController] = React.useState(
    () => new AbortController(),
  );
  const router = useRouter();

  const { startUpload, routeConfig, isUploading } = useUploadThing("pdf", {
    onClientUploadComplete: (res) => {
      const response = res[0];

      if (response.serverData.status === 200) {
        toast.success(response.serverData.message);
        router.refresh();
        onClose();
      } else {
        toast.error(response.serverData.message);
      }
    },
    onUploadError: () => {
      toast.error("Something went wrong with your upload. Please try again.");
    },
    onUploadProgress: (p) => {
      setProgress(p);
    },
    signal: controller.signal,
  });

  const onDrop = React.useCallback(
    async (acceptedFiles: File[]) => {
      // if user select invalid file type
      if (acceptedFiles.length === 0) {
        toast.error("Please select a valid file to upload.");
        return;
      }

      try {
        await startUpload(acceptedFiles);
      } catch (error: unknown) {
        if (error instanceof Error && error.name === "UploadAborted") {
          toast.error("Upload cancelled.");
          return;
        }
      }
    },
    [startUpload],
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: generateClientDropzoneAccept(
        generatePermittedFileTypes(routeConfig).fileTypes,
      ),
      maxFiles: 1,
      multiple: false,
      maxSize: 16 * 1024 * 1024,
    });

  const cancelUpload = React.useCallback(() => {
    controller.abort();
    setController(new AbortController());
  }, [controller]);

  return (
    <motion.div className="relative w-full overflow-hidden" layout>
      <GridPattern />
      {isUploading ? (
        acceptedFiles.map((file) => (
          <FileCard
            key={file.lastModified}
            name={file.name}
            size={file.size}
            progress={progress}
            cancelUpload={cancelUpload}
          />
        ))
      ) : (
        <div
          className={cn(
            "w-full rounded-lg border border-dashed",
            isDragActive && "border-muted-foreground/50",
          )}
          {...getRootProps()}
        >
          <input {...getInputProps()} className="hidden" />

          <UploadArea>
            <UploadStatus isDragActive={isDragActive} />
          </UploadArea>
        </div>
      )}
    </motion.div>
  );
}
