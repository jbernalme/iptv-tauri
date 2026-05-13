import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/components/logo";
import {
  ClapperboardIcon,
  HeartIcon,
  MonitorPlayIcon,
  TvIcon,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const data = {
  navMain: [
    {
      title: "Live TV",
      href: "/livetv",
      icon: TvIcon,
    },
    {
      title: "Movies",
      href: "/movies",
      icon: ClapperboardIcon,
    },
    {
      title: "Series",
      href: "/series",
      icon: MonitorPlayIcon,
    },
    {
      title: "Favorites",
      href: "/favs",
      icon: HeartIcon,
    },
  ],
};

export function AppSidebar() {
  console.log(window.location.hash);

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarGroup className="">
          <SidebarGroupContent className=" ">
            <SidebarMenu className="">
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title} className="w-full">
                  <NavLink to={item.href} className="flex items-center">
                    {({ isActive }) => (
                      <SidebarMenuButton isActive={isActive} className="h-fit ">
                        <item.icon className="!h-10 !w-10 stroke-1" />
                        {item.title}
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
