import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/container/headers/navbar";
import { SessionProvider } from "next-auth/react";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})




export const metadata: Metadata = {
  title: "Daneenz",
  description: "A Shopping App Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={roboto.className}
        >
          <div className="min-w-svw min-h-svh" >

                {children}
          </div>
          
                

        </body>
      </html>
    </SessionProvider>
  );
}
