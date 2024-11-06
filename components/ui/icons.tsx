import { cn } from "@/lib/utils";

function IconLoading({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn("animate-spin size-4 mx-2", className)}
      {...props}
    >
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 1 1-6.219-8.56"
      ></path>
    </svg>
  );
}

export { IconLoading };
