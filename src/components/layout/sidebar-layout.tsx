import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function SidebarLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" w-full ">
        <SidebarTrigger />
        <section className=" p-4">
          <Outlet />
        </section>
      </main>
    </SidebarProvider>
  );
}
