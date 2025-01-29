import ChangePasswordForm from "./change-password-form";

export default function ChangePassword() {
  return (
    <section className="flex flex-col items-start justify-between gap-8 border-b py-5 md:flex-row">
      <div className="">
        <h2 className="text-lg font-semibold">Change Password</h2>
        <p className="text-muted-foreground">
          Update your password to keep your account secure.
        </p>
      </div>

      <ChangePasswordForm />
    </section>
  );
}
