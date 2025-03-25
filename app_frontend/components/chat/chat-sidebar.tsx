'use client'

import { ChatSidebarStore } from "@/store/chat-sidebar-store";
import { motion } from "motion/react";


const ChatSidebar = () => {
  const {isOpen} = ChatSidebarStore();

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


