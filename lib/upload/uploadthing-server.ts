import { uploadFile } from "@/app/(dashboard)/documents/actions";
import type { FileRouter } from "uploadthing/next";
import { createUploadthing } from "uploadthing/next";
import { UTApi } from "uploadthing/server";
import { auth } from "../session";

export const utapi = new UTApi();

const f = createUploadthing({
  errorFormatter: (err) => {
    console.log("Error uploading file", err.message);
    console.log("  - Above error caused by:", err.cause);

    return { message: err.message };
  },
});

export const uploadRouter = {
  pdf: f({
    pdf: {
      maxFileSize: "16MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req, files }) => {
      // check if the user is logged in
      const session = await auth();
      if (!session) {
        throw new Error("Unauthorized");
      }

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ file, metadata }) => {
      const uploadData = {
        userId: metadata.userId,
        name: file.name,
        key: file.key,
        url: file.url,
        size: file.size,
      };

      const response = await uploadFile(uploadData);

      return response;
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
