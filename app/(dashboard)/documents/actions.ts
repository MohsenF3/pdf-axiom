"use server";

import prisma from "@/lib/prisma";

interface FileInfo {
  userId: number;
  name: string;
  key: string;
  url: string;
}

export const uploadFile = async (data: FileInfo) => {
  try {
    await prisma.chat.create({
      data: {
        userId: data.userId,
        fileKey: data.key,
        pdfName: data.name,
        pdfUrl: data.url,
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
