import { auth, signIn } from "@/config/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../config/database";
import AppContextProvider from "./context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Garden",
  description: "Create your digital garden!",
  icons: {
    icon: "favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    return signIn();
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider initialSession={session}>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
