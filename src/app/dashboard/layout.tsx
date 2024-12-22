import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/container/headers/navbar";
import { SessionProvider } from "next-auth/react";
import { MainNav } from "@/components/dashboard/main-nav";
import { UserNav } from "@/components/dashboard/user-nav";
import Image from "next/image";
import { Roboto } from "next/font/google";

import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/dashboard/sidebar/nav-user";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daneez Dashboard",
  description: "A Shopping App Store",

};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <div className={roboto.className}>
        {/* <div className="border-b"> */}
        {/* <div className="flex h-16 items-center px-4">
            <div className="flex items-center space-x-4">
              <Image src="/assets/logo.png" width={40} height={40} alt="logo" />
              <h1 className="text-2xl font-bold">Daneenz</h1>
            </div>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div> */}
        {/* </div> */}
        {/* </div> */}
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center px-4 w-full">
                <SidebarTrigger className="-ml-1" />
                <div className="flex h-16 items-center px-4 justify-between w-full">
                  <div className="flex items-center space-x-4">
                  </div>
                  {/* <MainNav className="mx-6" /> */}
                  <div className="ml-auto flex items-center space-x-4">
                    <UserNav />
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>

        {/* <Navbar /> */}
      </div>
    </SessionProvider>
  );
}
