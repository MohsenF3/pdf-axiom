import { getConversations } from "@/app/(dashboard)/conversations/actions";
import conversationImage from "@/public/conversation.webp";
import Image from "next/image";
import { redirect } from "next/navigation";
import { cache } from "react";
import EmptyData from "../shared/empty-data";
import Error from "../shared/error";
import ConversationItems from "./conversation-items";
import NewChatButton from "./new-chat-button";
export const loadConversations = cache(async () => {
  return await getConversations();
});

export default async function FetchConversations() {
  const { status, message, data } = await loadConversations();

  // redirect user to login page if not logged in
  if (status === 401) {
    redirect("/login");
    return null;
  }

  if (status === 500) {
    return <Error message={message} />;
  }

  return data?.length ? (
    <ConversationItems conversations={data} />
  ) : (
    <EmptyData
      message="No recent conversations yet."
      button={<NewChatButton />}
      image={
        <div className="relative w-[300px]">
          <Image
            src={conversationImage}
            alt="conversation image"
            className="bg-blend-overlay"
            priority
          />
        </div>
      }
    />
  );
}
