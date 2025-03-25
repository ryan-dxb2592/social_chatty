'use client'

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LucideIcon, Contact, Phone, Users, Settings, User, MessageSquare, BotMessageSquare } from "lucide-react";
import NavItem from "./components/nav-item";
import { usePathname } from "next/navigation";

const navItems: { icon: LucideIcon; label: string; href: string }[] = [
  {
    icon: MessageSquare,
    label: "Chats",
    href: "/",
  },
  {
    icon: Contact,
    label: "Contacts",
    href: "/contacts",
  },
  {
    icon: Users,
    label: "Groups",
    href: "/groups",
  },
  {
    icon: Phone,
    label: "Calls",
    href: "/calls",
  },
  {
    icon: User,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
]

const SideNav = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return(
  <div className="w-20 border-r bg-white flex flex-col items-center py-2">
         <div className="p-4 border rounded-md ">
           <BotMessageSquare/>
         </div>
         <div className="flex-1 flex flex-col items-center gap-3 mt-6">
          {navItems.map((item, index) => (
            <NavItem key={item.label + index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={isActive(item.href)}
            />
          ))}
          
        </div>
        <div className=" flex flex-col items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="!rounded-button w-12 h-12 hover:bg-gray-100"
          >
            <i className="fas fa-cog text-xl text-gray-500"></i>
          </Button>
          <Avatar className="w-12 h-12 cursor-pointer">
            <AvatarImage src="https://public.readdy.ai/ai/img_res/5f5d3109bb3368cbc35eeaf59ae7cc0e.jpg" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </div>
      </div>)
};

export default SideNav;


