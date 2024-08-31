import { auth } from "@/config/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../config/database";
import AppContextProvider from "./context";
import "./globals.css";
import Image from "next/image";
import bgimage from "@/img/background.png";
import Header from "@/components/header";

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
      <body className={inter.className}>
        <AppContextProvider initialSession={session}>
          <Header/>
          {children}
          <Image className="object-cover -z-10 brightness-[0.9]" src={bgimage} alt="" fill={true} />
        </AppContextProvider>
      </body>
    </html>
  );
}
