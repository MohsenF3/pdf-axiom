import z from "zod";

export const personalInfoSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
