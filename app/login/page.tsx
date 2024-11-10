import ExternalLogin from "@/components/login/external-login";
import LoginWithEmail from "@/components/login/login-with-email";
import Logo from "@/components/shared/logo";
import { auth } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="mx-auto flex h-screen max-w-lg flex-col items-center justify-center px-4">
      <Logo />
      <h1 className="my-4 text-xl font-bold md:text-4xl">
        Welcome to PDF Axiom
      </h1>
      <ExternalLogin />
      <div className="my-6 h-px w-full bg-secondary"></div>
      <LoginWithEmail />
    </div>
  );
}
