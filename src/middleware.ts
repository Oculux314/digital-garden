import authConfig from "@/config/authConfig";
import NextAuth from "next-auth";
import { NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req: NextRequest) {});
