'use client'

import { motion } from "motion/react"
import { SidebarInset, useSidebar } from "@/components/ui/sidebar"

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    const { state } = useSidebar();
    
    return (
        // <motion.div
        //     className={`
        //         flex-1 flex flex-col min-h-0
        //         transition-all duration-200 ease-linear
        //         ${state === 'expanded' ? 'md:mr-80' : ''}
        //     `}
        //     initial={{ opacity: 0, y: 10 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     exit={{ opacity: 0, y: -10 }}
        //     transition={{ duration: 0.3 }}
        // >
        <SidebarInset className="flex-1 bg-red-500">
                {children}
        </SidebarInset>
        // </motion.div>
    )
}

export default ChatLayout;
