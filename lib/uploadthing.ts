import { OurFileRouter } from "@/app/server/uploadthing";
import { generateReactHelpers } from "@uploadthing/react";

export const { useUploadThing } = generateReactHelpers<OurFileRouter>();
