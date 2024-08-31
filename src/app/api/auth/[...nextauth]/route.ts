import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const options = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
