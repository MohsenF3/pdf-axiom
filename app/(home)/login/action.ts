"use server";

import prisma from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import { extractUsernameFromEmail } from "@/lib/utils";
import { LoginSchema, loginSchema } from "@/types/auth/schema";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export const getUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    return {
      type: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
};

export async function login(data: LoginSchema) {
  const parsedCredentials = loginSchema.safeParse(data);

  if (!parsedCredentials.success) {
    return {
      errors: parsedCredentials.error.flatten().fieldErrors,
    };
  }

  const { email, password } = parsedCredentials.data;
  const username = extractUsernameFromEmail(email);

  const user = await getUser(email);

  // if some error occurred while getting user
  if (user && "type" in user) {
    return {
      type: "error",
      message: user.message,
    };
  }

  // create a user in database and create a session
  if (!user) {
    await addUserToDatabase(username, email, password);
    return {
      type: "success",
      message: "Welcome to PDF Axiom!",
    };
  }

  // compare the password with hashed password in database
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) {
    return {
      type: "error",
      message: "Invalid email or password",
    };
  }

  await createSession({ username, email, id: user.id });
  return {
    type: "success",
    message: "Welcome to PDF Axiom!",
  };
}

async function addUserToDatabase(
  username: string,
  email: string,
  password: string,
) {
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash,
      },
    });

    await createSession({ username, email, id: newUser.id });
  } catch (error) {
    return {
      type: "error",
      message:
        "An error occurred while creating your account. Please try again later.",
    };
  }
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
