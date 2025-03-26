import ChatLayout from "@/components/chat/chat-layout";
import AppWrapper from "@/components/layout/app-wrapper";
import MainSidebar from "@/components/layout/sidebar/main-sidebar";
import SideNav from "@/components/navigation/side-nav";
import MobileNav from "@/components/navigation/mobile-nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppWrapper>
    <SideNav />
    <MobileNav />
    <MainSidebar />
    <ChatLayout/>
  </AppWrapper>
  );
};

export default Layout;


