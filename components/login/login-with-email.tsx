"use client";

import { login } from "@/app/(home)/login/action";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import SubmitButton from "../shared/submit-button";

export default function LoginWithEmail() {
  const [state, loginAction] = useFormState(login, undefined);
  const router = useRouter();

  React.useEffect(() => {
    if (state?.type && state?.message) {
      if (state.type === "error") {
        toast.error(state.message);
      } else {
        toast.success(state.message);
        router.replace("/conversations");
      }
    }
  }, [state, router]);

  return (
    <form className="w-full space-y-5" action={loginAction}>
      <InputBox
        id="email"
        type="email"
        name="email"
        required
        placeholder="contact@aceternity.com"
        errors={state?.errors?.email}
      />

      <InputBox
        id="password"
        type="password"
        name="password"
        required
        minLength={8}
        placeholder="********"
        errors={state?.errors?.password}
      />

      <SubmitButton type="submit">Continue with Email</SubmitButton>
    </form>
  );
}

interface InputBoxProps extends React.ComponentProps<"input"> {
  errors?: string[] | undefined;
}

export function InputBox({ errors, className, ...props }: InputBoxProps) {
  return (
    <div className="w-full space-y-2">
      <input
        className={cn(
          "h-10 w-full rounded-md border border-muted bg-transparent pl-4 text-sm placeholder-muted-foreground outline-none focus:outline-none focus:ring-2 focus:ring-muted active:outline-none",
          className,
        )}
        {...props}
      />
      <p className="text-red-500">{errors}</p>
    </div>
  );
}
