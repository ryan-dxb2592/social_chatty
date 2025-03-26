'use client'

import ChatSidebar from "./chat-sidebar";
import ChatHeader from "./chat-header";
import ChatMessageInput from "./chat-message-input";
import ChatMessages from "./chat-messages";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useChatStore } from "@/store/chat-store";
import { motion, AnimatePresence } from "framer-motion";

const MobileChatLayout = ({ activeChat }: { activeChat: any }) => {
    return (
        <AnimatePresence mode="wait">
            {activeChat && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="absolute inset-0 h-[calc(100vh-80px)] z-50 bg-white flex flex-1"
                >
                    <div className="flex flex-1 flex-col h-full">
                        <ChatHeader />
                        <ChatMessages />
                        <ChatMessageInput />
                    </div>
                    <ChatSidebar />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const DesktopChatLayout = () => {
    return (
        <div className="flex flex-1 h-screen relative">
            <div className="flex flex-1 flex-col h-full">
                <ChatHeader />
                <ChatMessages />
                <ChatMessageInput />
            </div>
            <ChatSidebar />
        </div>
    );
};

const ChatLayout = () => {
    const isMobile = useIsMobile();
    const { chats, activeChatId } = useChatStore();
    const activeChat = chats.find(chat => chat.id === activeChatId);
    // const activeChat = chats.find(chat => chat.id === "1");

    return isMobile ? <MobileChatLayout activeChat={activeChat} /> : <DesktopChatLayout />;
}

export default ChatLayout;
