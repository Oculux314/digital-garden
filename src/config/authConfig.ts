import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET!,
  session: {
    strategy: 'jwt',
  },
  // pages: {
  //   signIn: '/test/loginpagetest',
  // },
};

export default authConfig satisfies NextAuthConfig;
