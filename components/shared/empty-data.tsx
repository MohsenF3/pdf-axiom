import React from "react";

interface EmptyDataProps {
  message: string;
  button?: React.ReactNode;
  image?: React.ReactNode;
}

export default function EmptyData({ message, button, image }: EmptyDataProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-7">
      {image}

      <p className="mb-5 text-muted-foreground">{message}</p>

      {button}
    </div>
  );
}
