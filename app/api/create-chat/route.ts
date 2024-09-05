import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { createChatSchema } from "@/lib/schema/api/create-chat";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { userId } = auth();

  // If the user is not authenticated, return a 401 unauthorized response
  if (!userId) {
    return NextResponse.json("unauthorized", { status: 401 });
  }

  const body = await req.json();
  const parsedData = createChatSchema.safeParse(body);

  // If the parsed data is invalid, return a 400 bad request response
  if (!parsedData.success) {
    return NextResponse.json("Data format is wrong", { status: 400 });
  }

  const { pdf_key, pdf_name, pdf_url } = parsedData.data;

  try {
    const chat_key = await db
      .insert(chats)
      .values({
        userId,
        fileKey: pdf_key,
        pdfName: pdf_name,
        pdfUrl: pdf_url,
      })
      .returning({
        chatKey: chats.id,
      });

    // Return a 200 OK response with the chat key
    return NextResponse.json(
      { chat_key: chat_key[0].chatKey },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
