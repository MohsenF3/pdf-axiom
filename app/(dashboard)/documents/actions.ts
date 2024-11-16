"use server";

import prisma from "@/lib/prisma";

interface FileInfo {
  userId: number;
  name: string;
  key: string;
  url: string;
  size: number;
}

export const uploadFile = async (data: FileInfo) => {
  console.log(data);
  try {
    await prisma.chat.create({
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
    console.log(error);
    return {
      status: 500,
      message: "Failed to upload file. Please try again later.",
    };
  }
};
