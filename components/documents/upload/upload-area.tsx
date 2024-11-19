import { motion } from "framer-motion";
import React from "react";

interface UploadAreaProps extends React.PropsWithChildren {}

export default function UploadArea({ children }: UploadAreaProps) {
  return (
    <motion.div
      whileHover="animate"
      className="group/file relative block w-full cursor-pointer overflow-hidden rounded-lg p-10"
    >
      <p className="relative z-20 my-2 text-center text-neutral-400 dark:text-neutral-400">
        Drag or drop your files here or click to upload
      </p>
      <p className="text-center text-muted-foreground">
        Maximum file size allowed is{" "}
        <span className="font-semibold text-white underline">16 MB</span>
      </p>

      {children}
    </motion.div>
  );
}
