import ChatLayout from "@/components/chat/chat-layout";
import AppWrapper from "@/components/layout/app-wrapper";
import MainSidebar from "@/components/layout/sidebar/main-sidebar";
import SecondarySidebar from "@/components/layout/sidebar/secondary-sidebar";
import SideNav from "@/components/navigation/side-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
  <SidebarProvider >
    <AppWrapper>
    <SideNav />
    <MainSidebar />
    <ChatLayout>
      {children}
    </ChatLayout>
    <SecondarySidebar />
  </AppWrapper>
  </SidebarProvider>
  );
};

export default Layout;


