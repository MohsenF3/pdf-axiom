"use client";

import { changePassword } from "@/app/(dashboard)/setting/action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChangePassword, changePasswordSchema } from "@/types/setting/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { PasswordInput } from "../ui/password-input";

export default function ChangePasswordForm() {
  const { refresh } = useRouter();

  const form = useForm<ChangePassword>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePassword) => {
    const response = await changePassword(data);

    if (response?.type === "error") {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);
    form.reset();
    refresh();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-5 md:w-1/3"
      >
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Old Password :</FormLabel>
              <FormControl>
                <PasswordInput
                  id="oldPassword"
                  placeholder="********"
                  autoComplete="current-password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password :</FormLabel>
              <FormControl>
                <PasswordInput
                  id="newPassword"
                  placeholder="********"
                  autoComplete="new-password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password :</FormLabel>
              <FormControl>
                <PasswordInput
                  id="confirmPassword"
                  placeholder="********"
                  autoComplete="confirm-password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="loading"
            className="w-full px-4 py-3 sm:w-auto"
            disabled={form.formState.isSubmitting}
            pending={form.formState.isSubmitting}
          >
            Change Password
          </Button>
        </div>
      </form>
    </Form>
  );
}
