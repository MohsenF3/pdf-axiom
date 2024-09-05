import { auth } from "@clerk/nextjs/server";
import { createUploadthing } from "uploadthing/next";
import type { FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
  pdfFile: f({
    pdf: {
      maxFileSize: "16MB",
      maxFileCount: 1,
    },
  })
    .middleware(() => {
      const { userId } = auth();

      if (!userId) {
        throw new UploadThingError("Please login first!");
      }

      return { userId };
    })
    .onUploadComplete(({ file }) => {
      return file;
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
