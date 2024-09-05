import { uploadRouter } from "@/app/server/uploadthing";
import { createRouteHandler } from "uploadthing/next";

export const runtime = "edge";

export const { GET, POST } = createRouteHandler({
  router: uploadRouter,
});
