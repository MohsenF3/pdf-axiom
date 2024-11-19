"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Loader from "../shared/loader";

interface PdfViewProps extends React.ComponentProps<"div"> {
  url: string;
}

export default function PdfView({ url, className, ...props }: PdfViewProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className={cn("relative h-full flex-1", className)} {...props}>
      {isLoading ? <Loader /> : null}

      <iframe
        src={url}
        className="h-full w-full"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
}
