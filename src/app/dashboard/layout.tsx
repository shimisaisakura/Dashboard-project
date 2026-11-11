import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger className="fixed top-0 z-50" />

          <div className="w-full flex items-center justify-between px-6 py-4 border-b bg-background">
            <Navbar />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
