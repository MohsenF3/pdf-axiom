"use client";

import { updatePersonalInfo } from "@/app/(dashboard)/setting/action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSession } from "@/provider/session-provider";
import { PersonalInfo, personalInfoSchema } from "@/types/setting/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function PersonalInfoForm() {
  const { session } = useSession();
  const { refresh } = useRouter();

  const form = useForm<PersonalInfo>({
    defaultValues: {
      email: session?.user.email || "",
    },
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = async (data: PersonalInfo) => {
    // check if email is equal to the current email
    const isEmailEqual = session?.user.email === data.email;
    if (isEmailEqual) {
      form.setError("email", { message: "No changes were made to the email." });
      return;
    }

    const response = await updatePersonalInfo(data);

    if (response?.type === "error") {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email :</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
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
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
