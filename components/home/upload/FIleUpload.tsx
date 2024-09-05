"use client";

import React from "react";
import UploadStatus from "./UploadStatus";
import UploadArea from "./UploadArea";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import FileCard from "./FileCard";
import { v4 as uuidv4 } from "uuid";
import GridPattern from "../GridPattern";
import { useUploadFile } from "@/hooks/use-upload-file";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

export default function FileUpload() {
  const {
    files,
    isDisabled,
    progress,
    maxFileCount,
    maxFileSize,
    fileTypes,
    onDrop,
  } = useUploadFile();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
    maxFiles: maxFileCount,
    disabled: isDisabled,
    maxSize: maxFileSize,
  });

  return (
    <motion.div className="w-full relative overflow-hidden" layout>
      <GridPattern />
      {isDisabled ? (
        files.map((file) => (
          <FileCard
            key={uuidv4()}
            name={file.name}
            size={file.size}
            progress={progress}
          />
        ))
      ) : (
        <div
          className={cn(
            "w-full border border-dashed rounded-lg",
            isDragActive && "border-muted-foreground/50"
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
