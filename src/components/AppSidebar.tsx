import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Home, LayoutDashboardIcon, Plus } from "lucide-react";

import Link from "next/link";

const items = [
  { title: "Dashboard", href: "#", icon: LayoutDashboardIcon },
  { title: "Products", href: "#", icon: LayoutDashboardIcon },
  { title: "Favorites", href: "#", icon: LayoutDashboardIcon },
  { title: "Inbox", href: "#", icon: LayoutDashboardIcon },
  { title: "Order Lists", href: "#", icon: LayoutDashboardIcon },
  { title: "Product Stock", href: "#", icon: LayoutDashboardIcon },
];
export default function AppSidebar() {
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Home />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuAction>
                <Plus /> <span className="sr-only">Add Project</span>
              </SidebarMenuAction>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupAction>
              <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((project) => (
                  <SidebarMenuItem key={project.title}>
                    <SidebarMenuButton asChild>
                      <a href={project.href}>
                        <project.icon />
                        <span>{project.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild></SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
