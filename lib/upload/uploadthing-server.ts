import { auth } from "@clerk/nextjs/server";
import { createUploadthing } from "uploadthing/next";
import type { FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { UTApi } from "uploadthing/server";

const f = createUploadthing();

export const utapi = new UTApi();

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
      const anyFile = file as any;
      return {
        pdf_key: anyFile.key,
        pdf_name: anyFile.name,
        pdf_url: anyFile.url,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
