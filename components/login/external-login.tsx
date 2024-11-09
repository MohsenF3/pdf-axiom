import { Button } from "../ui/button";
import { IconGIthub, IconGoogle } from "../ui/icons";

export default function ExternalLogin() {
  return (
    <div className="flex w-full flex-col gap-4 sm:flex-row">
      <GithubLogin />
      <GoogleLogin />
    </div>
  );
}

function GithubLogin() {
  return (
    <Button className="flex-1 space-x-2 bg-foreground px-4 py-3 hover:bg-foreground/80">
      <IconGIthub />
      <span className="text-sm">Login with GitHub</span>
    </Button>
  );
}

function GoogleLogin() {
  return (
    <Button className="flex-1 space-x-2 bg-foreground px-4 py-3 hover:bg-foreground/80">
      <IconGoogle />
      <span className="text-sm">Login with Google</span>
    </Button>
  );
}
