'use client'

import React, { useState, useRef, useEffect } from "react";
import { emojiObj } from "./emojies";
import {
  MdOutlineEmojiEmotions,
  MdDirectionsWalk,
  MdOutlineEmojiSymbols,
} from "react-icons/md";
import { PiCat } from "react-icons/pi";
import {
  IoFastFoodOutline,
  IoCarOutline,
  IoBulbOutline,
  IoFlagOutline,
} from "react-icons/io5";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { EmojiPickerStore } from "@/store/emoji-picker-store";
import { Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define categories and their corresponding icons
const categories = [
  { name: "People", icon: <MdOutlineEmojiEmotions /> },
  { name: "Nature", icon: <PiCat /> },
  { name: "Food", icon: <IoFastFoodOutline /> },
  { name: "Activity", icon: <MdDirectionsWalk /> },
  { name: "Travel", icon: <IoCarOutline /> },
  { name: "Objects", icon: <IoBulbOutline /> },
  { name: "Symbols", icon: <MdOutlineEmojiSymbols /> },
  { name: "Flags", icon: <IoFlagOutline /> },
];

const EmojiPicker = () => {
    const { isOpen, onOpen, onClose } = EmojiPickerStore();

    // const handleEmojiClick = (emojiData: any) => {
    //     if (chatMessageInputRef.current) {
    //         chatMessageInputRef.current.value += emojiData.emoji;
    //     }

  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const emojiDisplayRef = useRef<HTMLDivElement>(null); // Explicitly type as HTMLDivElement

  // Reset scroll position when the active category changes
  useEffect(() => {
    if (emojiDisplayRef.current) {
      emojiDisplayRef.current.scrollTop = 0;
    }
  }, [activeCategory]);

  const handleEmojiClick = (emoji: string) => {
    console.log(emoji);
    //handle emoji to text input here
  };

  return (
    <Popover >
    <PopoverTrigger asChild>
    <Button variant="ghost" size="icon" className="cursor-pointer" 
                onClick={() => onOpen()}
                >
                    <Smile className="h-6 w-6" />
                </Button>
    </PopoverTrigger>
    <PopoverContent
    side="top"
    align="start"
    className="h-fit w-fit p-0 mb-4">
   
    <div className="flex flex-col w-[320px] mx-auto  rounded-md overflow-hidden shadow-sm ">
      {/* Category Navigation */}
      <div className="flex justify-around p-1 border-b bg-white ">
        {categories.map(({ name, icon }) => (
          <div
            key={name}
            className={`p-2 cursor-pointer flex items-center rounded ${
              name === activeCategory ? "bg-secondary" : "bg-white"
            }`}
            onClick={() => setActiveCategory(name)}
          >
            <span className="text-primary">{icon}</span>
          </div>
        ))}
      </div>
      {/* Emoji Display */}
      <div
        className="p-2 hide-scrollbar grid grid-cols-8 gap-1 max-h-72 overflow-y-auto"
        ref={emojiDisplayRef}
      >
        {emojiObj[activeCategory].map(({ emoji }, index) => (
          <div
            key={index}
            className="flex justify-center items-center py-1 px-2 cursor-pointer rounded hover:bg-secondary"
            onClick={() => handleEmojiClick(emoji)} // Add onClick to log the emoji
          >
            <span className="text-2xl">{emoji}</span>
          </div>
        ))}
      </div>
    </div>
    </PopoverContent>
    </Popover>
  );
}


export default EmojiPicker;