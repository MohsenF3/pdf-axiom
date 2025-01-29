"use server";

import prisma from "@/lib/prisma";
import { auth, deleteSession, refreshSession } from "@/lib/session";
import { extractUsernameFromEmail } from "@/lib/utils";
import {
  ChangePassword,
  changePasswordSchema,
  PersonalInfo,
  personalInfoSchema,
} from "@/types/setting/schema";
import bcrypt from "bcrypt";

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
  const username = extractUsernameFromEmail(email);

  try {
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        email,
      },
    });

    await refreshSession({ ...session.user, email, username });

    return { type: "success", message: "Personal info updated successfully." };
  } catch (error) {
    return {
      type: "error",
      message: "Failed to update personal info. Please try again later.",
    };
  }
};

export const changePassword = async (data: ChangePassword) => {
  const session = await auth();
  if (!session) {
    return { type: "error", message: "User not authenticated." };
  }

  // Validate the data
  const parsedCredentials = changePasswordSchema.safeParse(data);

  if (!parsedCredentials.success) {
    return {
      errors: parsedCredentials.error.flatten().fieldErrors,
    };
  }

  const { oldPassword, newPassword } = parsedCredentials.data;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return {
        type: "error",
        message: "User not found.",
      };
    }

    const isPasswordValid = await bcrypt.compare(
      oldPassword,
      user.passwordHash,
    );

    if (!isPasswordValid) {
      return {
        type: "error",
        message: "Old password is incorrect.",
      };
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        passwordHash,
      },
    });

    return { type: "success", message: "Password change successfully." };
  } catch (error) {
    return {
      type: "error",
      message: "Failed to change password. Please try again later.",
    };
  }
};

export const deleteAccount = async () => {
  const session = await auth();
  if (!session) {
    return { type: "error", message: "User not authenticated." };
  }

  try {
    await prisma.user.delete({
      where: {
        email: session.user.email,
      },
    });
    await deleteSession();

    return {
      type: "success",
      message: "Your account has been deleted successfully.",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Failed to delete your account. Please try again later.",
    };
  }
};
