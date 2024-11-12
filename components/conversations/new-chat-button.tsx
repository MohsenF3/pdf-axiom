import { Button } from "../ui/button";
import { IconAddChat } from "../ui/icons";

export default function NewChatButton() {
  return (
    <Button variant="gooeyLeft" className="gap-1">
      <IconAddChat className="size-5" />
      New Chat
    </Button>
  );
}
