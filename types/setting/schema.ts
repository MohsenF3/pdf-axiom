import z from "zod";

export const personalInfoSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
});

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(8, "Password should have at least 8 characters"),
    newPassword: z
      .string()
      .min(8, "Password should have at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password should have at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password fields do not match.",
    path: ["confirmPassword"],
  });

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type ChangePassword = z.infer<typeof changePasswordSchema>;
