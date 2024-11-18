"use client";

import React from "react";
import Loader from "../shared/loader";

interface PdfViewProps {
  url: string;
}

export default function PdfView({ url }: PdfViewProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="relative h-full flex-1">
      {isLoading && <Loader />}

      <iframe
        src={url}
        className="h-full w-full"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
}
