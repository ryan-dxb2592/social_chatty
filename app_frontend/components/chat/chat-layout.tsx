import ChatSidebar from "./chat-sidebar";
import ChatHeader from "./chat-header";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {


    return (    
     <div className="flex flex-1 h-screen">
        <div className="flex flex-1 h-full ">
            
        <div className="flex flex-1 flex-col h-full ">
            <ChatHeader />
            {children}
        </div>
        </div>

        <ChatSidebar />
     </div>
    )
}

export default ChatLayout;
