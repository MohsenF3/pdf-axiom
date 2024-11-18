"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/lib/session";
import { utapi } from "@/lib/upload/uploadthing-server";

interface FileInfo {
  userId: number;
  name: string;
  key: string;
  url: string;
  size: number;
}

export const uploadFile = async (data: FileInfo) => {
  // we already checked if the user is logged in in the uploadThing middleware
  try {
    await prisma.document.create({
      data: {
        userId: data.userId,
        fileKey: data.key,
        pdfName: data.name,
        pdfUrl: data.url,
        pdfSize: data.size,
      },
    });

    return {
      status: 200,
      message: `${data.name} uploaded successfully!`,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Failed to upload file. Please try again later.",
    };
  }
};

export const getDocuments = async () => {
  const session = await auth();

  if (!session) {
    return {
      status: 401,
      message: "Unauthorized",
    };
  }

  try {
    const documents = await prisma.document.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      status: 200,
      data: documents,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Failed to get documents. Please try again later.",
    };
  }
};

export const getDocument = async (id: number) => {
  try {
    const document = await prisma.document.findUnique({
      where: {
        id,
      },
    });

    return { status: 200, data: document };
  } catch (error) {
    return {
      status: 500,
      message: "Failed to delete conversation. Please try again later.",
    };
  }
};

export const deleteDocument = async (documentKey: string) => {
  const session = await auth();
  if (!session) {
    return { status: 401, message: "User not authenticated." };
  }

  try {
    // delete the file from uploadthing
    await utapi.deleteFiles(documentKey);
    // delete the file from the database
    await prisma.document.delete({
      where: {
        fileKey: documentKey,
      },
    });
    return { status: 200, message: "Document deleted successfully." };
  } catch (error) {
    return {
      status: 500,
      message: "Failed to delete Document. Please try again later.",
    };
  }
};
