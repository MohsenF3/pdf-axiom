import FIleUpload from "@/components/home/upload/FIleUpload";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  // CLERK
  const { userId } = auth();
  const isAuth = !!userId;

  return (
    <main className="w-screen min-h-screen container py-28">
      <div className="flex flex-col items-center text-center gap-5">
        <div className="flex items-center">
          <h1 className="mr-3 text-5xl font-semibold">
            Unlock the Power of PDFs with PDF Axiom
          </h1>

          <UserButton />
        </div>
        <div>
          <h3>
            Revolutionize the way you search, analyze, and understand PDFs with
            our cutting-edge AI-powered platform.
          </h3>
          <p>
            Search PDFs with unparalleled speed and accuracy Analyze and extract
            key information from complex PDFs Understand the context and meaning
            behind PDFs with our advanced AI-powered insights
          </p>
        </div>

        {isAuth ? (
          <FIleUpload />
        ) : (
          <Link href="/sign-in">
            <Button>Get Started with PDF Axiom Today</Button>
          </Link>
        )}
      </div>
    </main>
  );
}
