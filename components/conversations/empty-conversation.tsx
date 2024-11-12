import conversationImage from "@/public/conversation.webp";
import Image from "next/image";
import NewChatButton from "./new-chat-button";

export default function EmptyConversation() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-7">
      <div className="relative w-[300px]">
        <Image
          src={conversationImage}
          alt="conversation image"
          className="bg-blend-overlay"
        />
      </div>

      <p className="mb-5 text-muted-foreground">No recent conversations yet.</p>

      <NewChatButton />
    </div>
  );
}
