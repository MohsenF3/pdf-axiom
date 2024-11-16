"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/lib/session";

export const getConversations = async () => {
  const session = await auth();

  // Check if the user is authenticated
  if (!session) {
    return {
      status: 401,
      message: "User not authenticated.",
    };
  }

  try {
    const conversations = await prisma.chat.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { status: 200, data: conversations };
  } catch (error) {
    return {
      status: 500,
      message: "Failed to fetch conversations. Please try again later.",
    };
  }
};

export const deleteConversation = async (conversationId: number) => {
  const session = await auth();
  if (!session) {
    return { status: 401, message: "User not authenticated." };
  }

  try {
    await prisma.chat.delete({
      where: {
        id: conversationId,
      },
    });
    return { status: 200, message: "Conversation deleted successfully." };
  } catch (error) {
    return {
      status: 500,
      message: "Failed to delete conversation. Please try again later.",
    };
  }
};
