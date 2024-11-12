import { getConversations } from "@/lib/actions";
import { redirect } from "next/navigation";
import { cache } from "react";
import Error from "../shared/error";
import ConversationItems from "./conversation-items";
import EmptyConversation from "./empty-conversation";

const loadConversations = cache(async () => {
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
    <EmptyConversation />
  );
}
