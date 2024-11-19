import { auth } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/conversations", "/documents", "/conversation"];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route),
  );
  const isPublicRoute = publicRoutes.includes(path);

  const session = await auth();

  // Redirect unauthenticated users from protected routes to `/login`
  if (isProtectedRoute && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Redirect authenticated users trying to access `/login` to `/conversations`
  if (isPublicRoute && session?.user) {
    return NextResponse.redirect(new URL("/conversations", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
