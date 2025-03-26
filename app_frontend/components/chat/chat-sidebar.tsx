'use client'

import { useIsTablet } from "@/hooks/use-tablet";
import { ChatSidebarStore } from "@/store/chat-sidebar-store";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";


const ChatSidebar = () => {
  const {isOpen, onClose, onOpen} = ChatSidebarStore();
  const isTablet = useIsTablet();

  const toggleSidebar = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }

  return (
    <motion.aside
    initial={{ width: 0 }}
    animate={{ 
        width: isTablet && isOpen ? "100%" : (isOpen ? 300 : 0),
    }}
    transition={{
      duration: 0.3,
      ease: "easeInOut"
    }}
    className="h-full shrink-0 border-l overflow-hidden bg-red-500 absolute right-0 lg:relative "
  >
    {/* Sidebar content goes here */}
    <div className="p-4">
      <Button variant="ghost" size="icon" className="cursor-pointer" onClick={toggleSidebar}>
        <ArrowLeft />
      </Button>
      <h2 className="font-semibold">Sidebar Content</h2>
    </div>
  </motion.aside>
  );
};

export default ChatSidebar;


