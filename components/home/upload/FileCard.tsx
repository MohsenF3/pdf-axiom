import { Progress } from "@/components/ui/progress";
import { formatBytes } from "@/lib/utils";
import { FileText } from "lucide-react";
import React from "react";

type FileCardProps = {
  name: string;
  size: number;
  progress: number;
};

export default function FileCard({ name, progress, size }: FileCardProps) {
  return (
    <div className="w-full border border-dashed p-5 rounded-lg relative z-20">
      <div className="flex items-start gap-3 mb-5">
        <FileText
          className="size-10 text-muted-foreground"
          aria-hidden="true"
        />
        <div className="flex flex-col justify-start items-start">
          <p className="line-clamp-1 text-sm font-medium text-foreground/80">
            {name}
          </p>
          <p className="text-xs text-muted-foreground">{formatBytes(size)}</p>
        </div>
      </div>
      <Progress value={progress} />
    </div>
  );
}
