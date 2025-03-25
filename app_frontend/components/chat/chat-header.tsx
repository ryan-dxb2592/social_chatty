'use client'

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, User, Search, Video, Mic, Info, MoreVertical } from "lucide-react";
import { useChatSidebarStore } from "@/store/use-chat-sidebar";
import ChatHeaderDropdown from "./chat-header-dropdown";


const ChatHeader = () => {
    const {isOpen, onOpen, onClose} = useChatSidebarStore();

    const toggleSidebar = () => {
        if (isOpen) {
            onClose();
        } else {
            onOpen();
        }
    }
    return (
        <div className="flex items-center justify-between p-4 h-16 border-b bg-white">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                    <ArrowLeft />
                </Button>

                <div className="flex items-center gap-3">
                    <div className="relative border-2 border-white rounded-full">

                    <Avatar className="w-12 h-12 border-2 border-white">
                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                        <AvatarFallback>
                            A
                        </AvatarFallback>
                    </Avatar>
                        <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full z-10"></div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className=" font-semibold">John Doe</h3>
                        <p className="text-xs text-muted-foreground">
                            Online
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                    <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                    <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                    <Mic className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="cursor-pointer"
                onClick={toggleSidebar}
                >
                    <Info className="h-5 w-5" />
                </Button>
                <ChatHeaderDropdown>
                    <Button variant="ghost" size="icon" className="cursor-pointer">
                        <MoreVertical className="h-5 w-5" />
                    </Button>
                </ChatHeaderDropdown>
            </div>
        </div>
    )
}

export default ChatHeader;
