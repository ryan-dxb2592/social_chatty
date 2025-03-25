import ChatLayout from "@/components/chat/chat-layout";
import AppWrapper from "@/components/layout/app-wrapper";
import MainSidebar from "@/components/layout/sidebar/main-sidebar";
import SideNav from "@/components/navigation/side-nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppWrapper>
    <SideNav />
    <MainSidebar />
    <ChatLayout>
      {children}
    </ChatLayout>
  </AppWrapper>
  );
};

export default Layout;


