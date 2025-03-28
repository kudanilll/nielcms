import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import ProtectedRoute from "@/components/protected-route";
import NavigationBar from "@/components/navigation-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <NavigationBar />
          {children}
        </main>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
