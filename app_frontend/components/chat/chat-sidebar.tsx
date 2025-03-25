'use client'

import { useChatSidebarStore } from "@/store/use-chat-sidebar";
import { motion } from "motion/react";


const ChatSidebar = () => {
  const isOpen = useChatSidebarStore((state) => state.isOpen);

  return (
    <motion.aside
    initial={{ width: 0 }}
    animate={{ 
        width: isOpen ? 300 : 0,
    }}
    transition={{
      duration: 0.3,
      ease: "easeInOut"
    }}
    className="h-full  border-l overflow-hidden bg-red-500"
  >
    {/* Sidebar content goes here */}
    <div className="p-4">
      <h2 className="font-semibold">Sidebar Content</h2>
    </div>
  </motion.aside>
  );
};

export default ChatSidebar;


