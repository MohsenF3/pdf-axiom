import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../ui/button";

interface SubmitButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function SubmitButton({
  className,
  children,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="loading"
      className={cn("flex w-full items-center px-4 py-3", className)}
      disabled={pending}
      pending={pending}
      {...props}
    >
      {children}
    </Button>
  );
}
