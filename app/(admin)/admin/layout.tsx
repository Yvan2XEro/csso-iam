"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { AppSidebar } from "../components/organisms/AppSidebar";
import { AppToolbar } from "../components/organisms/AppToolbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex ">
      {/* Sidebar For big screens */}
      <div className={cn("hidden lg:block sticky top-0")}>
        <AppSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex-auto">
        <AppToolbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="p-2 h-screen overflow-auto">{children}</main>
      </div>
    </div>
  );
}
