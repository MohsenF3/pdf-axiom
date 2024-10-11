import { uploadRouter } from "@/lib/upload/uploadthing-server";
import { createRouteHandler } from "uploadthing/next";

export const runtime = "edge";

export const { GET, POST } = createRouteHandler({
  router: uploadRouter,
});
