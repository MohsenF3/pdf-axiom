import React from "react";
import { motion } from "framer-motion";

interface UploadAreaProps extends React.PropsWithChildren {}

export default function UploadArea({ children }: UploadAreaProps) {
  return (
    <motion.div
      whileHover="animate"
      className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
          Upload file
        </p>
        <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
          Drag or drop your files here or click to upload
        </p>
        <p className="text-muted-foreground ">
          Maximum file size allowed is{" "}
          <span className="text-white underline font-medium">12 MB</span>
        </p>
      </div>

      {children}
    </motion.div>
  );
}
