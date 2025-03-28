"use client";

import {
  PanelTop,
  LayoutDashboard,
  Image as ImageIcon,
  ShoppingCart,
  MessageCircleMore,
  Settings,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import Image from "next/image";

const items = [
  {
    title: "Dashboard",
    url: "#dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Media Library",
    url: "#media-library",
    icon: ImageIcon,
  },
  {
    title: "Web Pages",
    icon: PanelTop,
    subItems: [
      {
        title: "Home Page",
        url: "#home-page",
      },
      {
        title: "Product Page",
        url: "#product-page",
      },
      {
        title: "Testimonial Page",
        url: "#testimonial-page",
      },
    ],
  },
  {
    title: "Products",
    icon: ShoppingCart,
    subItems: [
      {
        title: "Computer",
        url: "#computer",
      },
      {
        title: "Laptop",
        url: "#laptop",
      },
    ],
  },
  {
    title: "Testimonial",
    url: "#testimonial",
    icon: MessageCircleMore,
  },
  {
    title: "Settings",
    url: "#settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await signOut(auth);
      // Redirect ke halaman login setelah logout
      router.push("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-4 m-2">
          <Image src="/favicon.ico" alt="NielCMS Logo" width={40} height={40} />
          <h2 className="leading-none py-1 text-2xl font-semibold">Nielcms</h2>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (item.subItems) {
                  return (
                    <Collapsible key={item.title} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <item.icon />
                            <span>{item.title}</span>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                      </SidebarMenuItem>
                      <CollapsibleContent>
                        <SidebarMenu className="pl-6 text-neutral-700">
                          {item.subItems.map((subItem) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton asChild>
                                <a href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </CollapsibleContent>
                    </Collapsible>
                  );
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={handleLogout}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
}
