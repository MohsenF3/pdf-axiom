import { createRouteHandler } from "uploadthing/next";

import { uploadRouter } from "@/lib/upload/uploadthing-server";

export const { GET, POST } = createRouteHandler({
  router: uploadRouter,
});
