
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";


type NavItemType = {
    icon: LucideIcon;
    label: string;
    href: string;
    isActive: boolean;
}

const NavItem = ({ icon: Icon, label, href, isActive }: NavItemType) => {
    

  return (
    <Link href={href} className={cn("group w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-md" , isActive && "bg-gray-100")}>
      <Icon size={12} className={cn("w-5 h-5 text-muted-foreground group-hover:text-primary" , isActive && "text-primary")}/>
    </Link>
  );
};

export default NavItem;
