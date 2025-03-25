import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


const recentChats = [
    {
      id: 1,
      name: "Nichol",
      online: true,
      avatar:
        "https://public.readdy.ai/ai/img_res/c6866dd0ffb9c9deccb75a791f103dc2.jpg",
    },
    {
      id: 2,
      name: "Titus",
      online: true,
      avatar:
        "https://public.readdy.ai/ai/img_res/cbb028f11ac8c1efb10183e11a9a464f.jpg",
    },
    {
      id: 3,
      name: "Geoffrey",
      online: true,
      avatar:
        "https://public.readdy.ai/ai/img_res/1b1583030a38672b11e9a472f6d72d02.jpg",
    },
    {
      id: 4,
      name: "Laverty",
      online: true,
      avatar:
        "https://public.readdy.ai/ai/img_res/6869be025a7dbbf9d8f36f8f6e82bfa6.jpg",
    },
    {
      id: 5,
      name: "Marcus",
      online: false,
      avatar:
        "https://public.readdy.ai/ai/img_res/7d4a8f29e12b38f9c1f8b8d5e3c9a2b1.jpg",
    },
    {
      id: 6,
      name: "Elena",
      online: true,
      avatar:
        "https://public.readdy.ai/ai/img_res/9c3b6e4f2a1d8c7b5e4f9a2d1c8b7a6.jpg",
    },
    {
      id: 7,
      name: "Sophia",
      online: true,
      avatar:
        "https://public.readdy.ai/ai/img_res/2e5f8a9d4c7b3a6n1m4p9q2r5s8t7v.jpg",
    },
    {
      id: 8,
      name: "Lucas",
      online: false,
      avatar:
        "https://public.readdy.ai/ai/img_res/5k8m2n7p4q9r3s6t1v4w7x2y5z8a3.jpg",
    },
    {
      id: 9,
      name: "Isabella",
      online: true,
      avatar:
        "https://public.readdy.ai/ai/img_res/8n4m2p7q3r9s5t1v6w8x4y2z7a3b5.jpg",
    }
  ];

const RecentChats = () => {
    return (
        <div className="mb-4 h-fit">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Recent Chats</h2>
                <Button variant="ghost" size="icon" className="!rounded-button">
                    <i className="fas fa-ellipsis-h text-gray-500"></i>
                </Button>
            </div>
            <div className="relative" >
                <ScrollArea type="hover" className="flex-1 w-full [data-orientation='horizontal']" >
                    <div className="flex space-x-4 pb-4">
                        {recentChats.map((chat) => (
                            <div key={chat.id} className="flex-shrink-0">
                                <div className="flex flex-col items-center space-y-1">
                                    <div className="relative">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src={chat.avatar} alt={chat.name} />
                                            <AvatarFallback>{chat.name[0]}</AvatarFallback>
                                        </Avatar>
                                        {chat.online && (
                                            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                                        )}
                                    </div>
                                    <p className="text-xs font-medium text-center">{chat.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal"  className="w-full" />
                </ScrollArea>
            </div>
        </div>
    );
};

export default RecentChats;
