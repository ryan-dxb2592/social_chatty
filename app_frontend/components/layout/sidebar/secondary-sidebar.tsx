'use client'

import { motion } from "motion/react"
import SidebarHeader from "./components/sidebar-header";
import { Sidebar, SidebarProvider, useSidebar } from "@/components/ui/sidebar"

const SecondarySidebar = () => {
  const { state } = useSidebar();
  return (
      <Sidebar
        side="right"
        variant="inset"
        collapsible="offcanvas"
        style={{width: state === 'expanded' ? '320px' : '80px'}}
        className=""
      >
        <div className="flex flex-col h-full">
          <SidebarHeader title="Profile" />
          <div className="flex-1 overflow-y-auto">
            {/* Add your sidebar content here */}
          </div>
        </div>

        {/* Add your sidebar content here */}
      </Sidebar>
  );
};

export default SecondarySidebar;


