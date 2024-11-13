import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";
import { IconAddChat } from "../ui/icons";

interface NewChatButtonProps extends ButtonProps {}

export default function NewChatButton({
  className,
  ...props
}: NewChatButtonProps) {
  return (
    <Button variant="gooeyLeft" className={cn("gap-1", className)} {...props}>
      <IconAddChat className="size-5" />
      New Chat
    </Button>
  );
}
