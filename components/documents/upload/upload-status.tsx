import { IconUpload } from "@/components/ui/icons";
import { mainVariant, secondaryVariant } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface UploadStatusProps {
  isDragActive: boolean;
}

function UploadStatus({ isDragActive }: UploadStatusProps) {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-xl">
      <motion.div
        layoutId="file-upload"
        variants={mainVariant}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={cn(
          "relative z-40 mx-auto mt-4 flex h-32 w-full max-w-[8rem] items-center justify-center rounded-md bg-foreground group-hover/file:shadow-2xl dark:bg-neutral-900",
          "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]",
        )}
      >
        {isDragActive ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center text-background"
          >
            Drop it
            <IconUpload className="size-10 text-muted" />
          </motion.p>
        ) : (
          <IconUpload className="size-10 text-muted" />
        )}
      </motion.div>

      <motion.div
        variants={secondaryVariant}
        className="absolute inset-0 z-30 mx-auto mt-4 flex h-32 w-full max-w-[8rem] items-center justify-center rounded-md border border-dashed border-sky-400 bg-transparent opacity-0"
      ></motion.div>
    </div>
  );
}

export default React.memo(UploadStatus);
