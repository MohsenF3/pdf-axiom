"use server";

import "server-only";
import { utapi } from "@/lib/upload/uploadthing-server";
import { DrizzleChat } from "@/lib/db/schema";

export const deleteFile = async ({ fileKey }: Pick<DrizzleChat, "fileKey">) => {
  await utapi.deleteFiles(fileKey);
};
