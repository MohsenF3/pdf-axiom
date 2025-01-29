import { SessionPayload, User } from "@/types";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const getEncodedKey = () => {
  const secretKey = process.env.SESSION_SECRET;
  if (!secretKey)
    throw new Error("SESSION_SECRET environment variable is not set");
  return new TextEncoder().encode(secretKey);
};

const COOKIE_NAME = "session";
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,
};

export async function createSession(user: User) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ user, expiresAt });

  cookies().set(COOKIE_NAME, session, {
    ...COOKIE_OPTIONS,
    expires: expiresAt,
  });
}

export async function deleteSession() {
  cookies().delete(COOKIE_NAME);
}

export const refreshSession = async (user: User) => {
  await deleteSession();
  await createSession(user);
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getEncodedKey());
}

export async function decrypt(sessionToken: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(sessionToken, getEncodedKey(), {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    console.error("Failed to verify session token");
    return null;
  }
}

export async function auth() {
  const sessionToken = cookies().get(COOKIE_NAME)?.value;
  const session = await decrypt(sessionToken);
  return session as SessionPayload | null;
}
