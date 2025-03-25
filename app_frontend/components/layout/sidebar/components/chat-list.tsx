"use client"
import {Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";


const ChatList = () => {
    const [selectedChat, setSelectedChat] = useState("Edward Lietz");
  
  const allChats = [
    {
      id: 1,
      name: "Mark Williams",
      message: "is typing...",
      time: "02:40 PM",
      unread: 12,
      avatar:
        "https://public.readdy.ai/ai/img_res/7fb1c555eca580a3a1d43683711408a0.jpg",
    },
    {
      id: 2,
      name: "Sarika Jain",
      message: "Do you know which...",
      time: "06:12 AM",
      unread: 0,
      avatar:
        "https://public.readdy.ai/ai/img_res/470d90adc7eb11f6679f83556a85a18b.jpg",
    },
    {
      id: 3,
      name: "Clyde Smith",
      message: "Haha oh man 🔥",
      time: "03:15 AM",
      unread: 55,
      avatar:
        "https://public.readdy.ai/ai/img_res/51eca4ce5fca664c0070a1c3a70f5ef8.jpg",
    },
    {
      id: 4,
      name: "Edward Lietz",
      message: "See you tomorrow! 👋",
      time: "Yesterday",
      unread: 0,
      avatar:
        "https://public.readdy.ai/ai/img_res/9d2c5d3f7e12b4a8c6f3e2d1a0b9c8e7.jpg",
    },
    {
      id: 5,
      name: "Maria Garcia",
      message: "The project files are ready",
      time: "Yesterday",
      unread: 3,
      avatar:
        "https://public.readdy.ai/ai/img_res/2e1d4c3b5a8f7e6d9c0b1a2n3m4k5j6.jpg",
    },
    {
      id: 6,
      name: "James Chen",
      message: "Let's schedule a call",
      time: "2 days ago",
      unread: 1,
      avatar:
        "https://public.readdy.ai/ai/img_res/8h7g6f5e4d3c2b1a9i8u7y6t5r4e3w2.jpg",
    },
    {
      id: 7,
      name: "Sophie Turner",
      message: "Thanks for your help! 🙏",
      time: "2 days ago",
      unread: 0,
      avatar:
        "https://public.readdy.ai/ai/img_res/4k5j6h7g8f9d0s1a2p3o4i5u6y7t8r9.jpg",
    },
    {
      id: 8,
      name: "Alex Thompson",
      message: "Did you check the latest updates?",
      time: "3 days ago",
      unread: 8,
      avatar:
        "https://public.readdy.ai/ai/img_res/1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6.jpg",
    }
    ,
    {
      id: 9,
      name: "Linda Martinez",
      message: "Can we review the design specs?",
      time: "4 days ago",
      unread: 2,
      avatar:
        "https://public.readdy.ai/ai/img_res/7h8j9k0l1m2n3b4v5c6x7z8a9s0d1f.jpg",
    },
    {
      id: 10,
      name: "David Wilson",
      message: "Great progress on the project! 🚀",
      time: "5 days ago", 
      unread: 0,
      avatar:
        "https://public.readdy.ai/ai/img_res/2n3m4b5v6c7x8z9a0s1d2f3g4h5j6k.jpg",
    },
    {
      id: 11,
      name: "Rachel Kim",
      message: "Meeting notes are in the shared folder",
      time: "1 week ago",
      unread: 4,
      avatar:
        "https://public.readdy.ai/ai/img_res/5k6l7m8n9b0v1c2x3z4a5s6d7f8g9h.jpg",
    }
  ];

    return (
        <ScrollArea className="flex-1 h-[calc(100vh-350px)] px-4 ">
            <div className="space-y-1">
              {allChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors ${
                    selectedChat === chat.name ? "bg-accent/50" : ""
                  }`}
                  onClick={() => setSelectedChat(chat.name)}
                >
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={chat.avatar} alt={chat.name} />
                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">{chat.name}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {chat.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {chat.message}
                    </p>
                  </div>
                  {chat.unread > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full min-w-[1.25rem] text-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea> 
    )
}

export default ChatList;
