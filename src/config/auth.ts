import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { callbackify } from "util";

console.log("MONGO_URL", process.env.MONGO_URL);

const mongoDbClient = new MongoClient(process.env.MONGO_URL!).connect();

const options = {
  adaptor: MongoDBAdapter(mongoDbClient),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn(user:any, account:any) {
      console.log("signIn", user, account);

      if (account.provider === "google") {
        try {
          await fetch(`${process.env.APP_URL}/`, )
        }
      }

      return user;
    },
  },
};

const handlers = NextAuth(options as any);

export default handlers;
