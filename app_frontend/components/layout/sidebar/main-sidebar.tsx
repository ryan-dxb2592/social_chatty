
import { Button } from "@/components/ui/button";
import SidebarHeader from "./components/sidebar-header";
import RecentChats from "./components/recent-chats";
import ChatList from "./components/chat-list";


const MainSidebar = () => {
  return (
    <div className="w-full md:w-80 md:max-w-80 h-[calc(100vh-80px)] md:h-screen max-h-screen border-r flex-shrink-0  bg-white flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col min-h-0 ">
        <SidebarHeader title="Chats" />
        <div className="flex-1 flex flex-col min-h-0">
          <div className="px-4">
          <RecentChats />
        </div>
        <div className="flex-1 min-h-0">
          <div className="px-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">All Chats</h2>
              <Button variant="ghost" size="icon" className="!rounded-button">
                <i className="fas fa-filter text-gray-500"></i>
              </Button>
            </div>
          </div>

          <ChatList />
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;


