import Header from "@/components/header";
import { auth } from "@/config/auth";
import bgimage from "@/img/background.png";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
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

  return (
    <html lang="en">
      <AppContextProvider initialSession={session}>
        <body className="h-[100vh] flex flex-col overflow-hidden">
          <Header />
          {children}
          <Image
            className="object-cover -z-10 brightness-[0.9]"
            src={bgimage}
            alt=""
            fill={true}
          />
        </body>
      </AppContextProvider>
    </html>
  );
}
