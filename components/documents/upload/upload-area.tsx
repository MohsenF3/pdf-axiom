import { motion } from "framer-motion";
import React from "react";

interface UploadAreaProps extends React.PropsWithChildren {}

export default function UploadArea({ children }: UploadAreaProps) {
  return (
    <motion.div
      whileHover="animate"
      className="group/file relative block w-full cursor-pointer overflow-hidden rounded-lg p-10"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="relative z-20 mt-2 font-sans text-base font-normal text-neutral-400 dark:text-neutral-400">
          Drag or drop your files here or click to upload
        </p>
        <p className="text-muted-foreground">
          Maximum file size allowed is{" "}
          <span className="font-semibold text-white underline">16 MB</span>
        </p>
      </div>

      {children}
    </motion.div>
  );
}
