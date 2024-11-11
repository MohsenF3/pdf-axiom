import { auth } from "@/lib/session";

interface UserDetailsProps {
  withDetails?: boolean;
}

export default async function UserDetails({
  withDetails = true,
}: UserDetailsProps) {
  const session = await auth();

  return (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-sidebar-primary">
        {session?.user.username.slice(0, 2)}
      </div>
      {withDetails ? (
        <div className="ml-2 grid flex-1 text-left text-sm leading-tight">
          <span className="truncate text-ellipsis font-semibold">
            {session?.user.username}
          </span>
          <span className="truncate text-ellipsis text-xs">
            {session?.user.email}
          </span>
        </div>
      ) : null}
    </>
  );
}
