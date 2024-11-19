"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/lib/session";

export const getDocumentByKey = async (documentKey: string) => {
  const session = await auth();

  if (!session) {
    return {
      status: 401,
      message: "Unauthorized",
    };
  }

  try {
    const document = await prisma.document.findUnique({
      where: {
        fileKey: documentKey,
      },
    });

    return { status: 200, data: document };
  } catch (error) {
    return {
      status: 500,
      message: "Failed to load conversation. Please try again later.",
    };
  }
};
