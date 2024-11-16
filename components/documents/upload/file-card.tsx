"use client";

import { Button } from "@/components/ui/button";
import { IconClose, IconFile } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";
import { formatBytes } from "@/lib/formatter";

type FileCardProps = {
  name: string;
  size: number;
  progress: number;
  cancelUpload: () => void;
};

export default function FileCard({
  name,
  progress,
  size,
  cancelUpload,
}: FileCardProps) {
  const formattedSize = formatBytes(size);

  return (
    <div className="relative z-20 w-full rounded-lg border border-dashed p-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <IconFile
            className="size-10 text-muted-foreground"
            aria-hidden="true"
          />
          <div className="flex flex-col items-start justify-start">
            <p className="line-clamp-1 text-sm font-medium text-foreground/80">
              {name}
            </p>
            <p className="text-xs text-muted-foreground">{formattedSize}</p>
          </div>
        </div>

        <Button size="icon" variant="ghost" onClick={cancelUpload}>
          <IconClose />
        </Button>
      </div>
      <Progress value={progress} />
    </div>
  );
}
