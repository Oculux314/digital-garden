import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  // Optionally add other NextAuth.js settings here
  secret: process.env.AUTH_SECRET!,
  session: {
    strategy: 'jwt',
  },
};

export default authConfig satisfies NextAuthConfig;
