'use client'

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LucideIcon, Contact, Phone, Users, Settings, User, MessageSquare, BotMessageSquare, Moon } from "lucide-react";
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

const MobileNav = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return(
  <div className="flex md:hidden w-full h-20  shrink-0 border-t bg-white absolute bottom-0 left-0 right-0 z-50 items-center  py-2">
         
         <div className="flex-1 flex flex-row items-center justify-center gap-3">
          {navItems.map((item, index) => (
            <NavItem key={item.label + index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={isActive(item.href)}
            />
          ))}
          
          
          <Avatar className="w-12 h-12 cursor-pointer">
            <AvatarImage src="https://public.readdy.ai/ai/img_res/5f5d3109bb3368cbc35eeaf59ae7cc0e.jpg" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
      </div>
      </div>)
};

export default MobileNav;


