import { z } from "zod";

export const createChatSchema = z.object({
  pdf_key: z.string().min(1),
  pdf_name: z.string().min(1),
  pdf_url: z.string().min(1),
});
