"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/lib/session";
import { PersonalInfo, personalInfoSchema } from "@/types/setting/schema";

export const updatePersonalInfo = async (data: PersonalInfo) => {
  const session = await auth();
  if (!session) {
    return { type: "error", message: "User not authenticated." };
  }

  // Validate the data
  const parsedCredentials = personalInfoSchema.safeParse(data);

  if (!parsedCredentials.success) {
    return {
      errors: parsedCredentials.error.flatten().fieldErrors,
    };
  }

  const { email } = parsedCredentials.data;

  try {
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        email,
      },
    });

    return { type: "success", message: "Personal info updated successfully." };
  } catch (error) {
    return {
      type: "error",
      message: "Failed to update personal info. Please try again later.",
    };
  }
};
