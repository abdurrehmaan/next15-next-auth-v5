"use client";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { auth } from "@/auth";
import { handleSignOut } from "@/app/actions/authActions";

import { useEffect, useState } from "react";

export function NavUser() {
  const { isMobile } = useSidebar();
  const [session, setSession] = useState<any>(null);
  const [firstLetter, setFirstLetter] = useState<string>("");

  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await fetch("/api/auth/session");
        const authSession = await response.json();
        setSession(authSession);
        setFirstLetter(authSession?.user?.name?.charAt(0)?.toUpperCase() ?? "");
      } catch (error) {
        console.error("Failed to fetch session:", error);
      }
    };
    getSession();
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={""} alt="" />
                <AvatarFallback className="rounded-lg">
                  {firstLetter}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {session?.user?.name}
                </span>
                <span className="truncate text-xs">{session?.user?.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem>
              <form action={handleSignOut}>
                <button type="submit">Sign Out</button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <form action={handleSignOut}>
                <button type="submit">Sign Out</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
