import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { X,  ThumbsDown, Ban, VolumeOff } from "lucide-react";

const dropdownItemsSection1 = [
    {
        label: "Mute Notifications",
        icon: VolumeOff,
        onClick: () => {}
    },
    {
        label: "Close Chat",
        icon: X,
        onClick: () => {}
    },
]

const dropdownItemsSection2 = [
    {
        label: "Report",
        icon: ThumbsDown,
        onClick: () => {}
    },
    {
        label: "Block",
        icon: Ban,
        onClick: () => {}
    },
    
]

const ChatHeaderDropdown = ({children}: {children: React.ReactNode}) => {
    return (
        <DropdownMenu >
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-3" side="bottom" align="end">
        <DropdownMenuGroup>
            {dropdownItemsSection1.map((item) => (
                <DropdownMenuItem key={item.label} onClick={item.onClick}>
                    <div className="flex items-center gap-3 w-full h-5">
                        <item.icon className="h-4 w-4" />
                        <p className="text-sm">{item.label}</p>
                    </div>
                </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            {dropdownItemsSection2.map((item) => (
                <DropdownMenuItem key={item.label} onClick={item.onClick}>
                    <div className="flex items-center gap-3 w-full h-5">
                        <item.icon className="h-4 w-4" />
                        <p className="text-sm">{item.label}</p>
                    </div>
                </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    )
}

export default ChatHeaderDropdown;
