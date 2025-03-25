import SearchBar from "@/components/common/search-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EllipsisVertical, Plus } from "lucide-react";


type SidebarHeaderProps = {
    title: string;
}

const SidebarHeader = ({ title,  }: SidebarHeaderProps) => {
    return (
        <div className="p-4 ">
           <div className="flex items-center justify-between mb-4">
             <h1 className="text-xl font-semibold">{title}</h1>
             <div className="flex items-center gap-2">

             <Button variant="ghost" size="icon"   className="cursor-pointer">
               <Plus size={12} />
           </Button>
           <Button variant="ghost" size="icon"   className="cursor-pointer">
            <EllipsisVertical size={12} />
           </Button>
             </div>
         </div>
         <SearchBar />
        </div>
    )
}

export default SidebarHeader;
