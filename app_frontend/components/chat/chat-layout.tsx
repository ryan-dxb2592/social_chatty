import ChatSidebar from "./chat-sidebar";
import ChatHeader from "./chat-header";
import ChatMessageInput from "./chat-message-input";

const ChatLayout = () => {


    return (    
     <div className="flex flex-1 h-screen">
        <div className="flex flex-1 h-full ">
            
        <div className="flex flex-1 flex-col h-full ">
            <ChatHeader />
            <div className="flex-1 overflow-y-auto py-4">
            </div>
                <ChatMessageInput />
        </div>
        </div>

        <ChatSidebar />
     </div>
    )
}

export default ChatLayout;
