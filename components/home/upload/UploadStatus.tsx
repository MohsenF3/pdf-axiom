import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { mainVariant, secondaryVariant } from "@/framerVariant/file-upload";

interface UploadStatusProps {
  isDragActive: boolean;
}

export default function UploadStatus({ isDragActive }: UploadStatusProps) {
  return (
    <div className="relative w-full mt-10 max-w-xl mx-auto">
      <motion.div
        layoutId="file-upload"
        variants={mainVariant}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={cn(
          "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
          "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
        )}
      >
        {isDragActive ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neutral-600 flex flex-col items-center"
          >
            Drop it
            <Upload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
          </motion.p>
        ) : (
          <Upload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
        )}
      </motion.div>

      <motion.div
        variants={secondaryVariant}
        className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"
      ></motion.div>
    </div>
  );
}
