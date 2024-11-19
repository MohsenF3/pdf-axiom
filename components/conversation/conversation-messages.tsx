import { auth } from "@/lib/session";
import { cn } from "@/lib/utils";
import { IconLogo } from "../shared/logo";

export default async function ConversationMessages({
  role,
  message,
}: {
  role: "user" | "system";
  message: string;
}) {
  const session = await auth();

  return (
    <div className="flex items-start gap-5">
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
          role === "system" ? "bg-muted" : "bg-primary-high",
        )}
      >
        {role === "user" ? session?.user.username.slice(0, 2) : <IconLogo />}
      </div>

      <div className={`${role === "user" ? "rounded bg-muted p-2" : ""}`}>
        {message}
      </div>
    </div>
  );
}
