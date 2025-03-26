'use client'

import { Plus, Smile, Mic, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { EmojiPickerStore } from "@/store/emoji-picker-store";
import EmojiPicker from "./components/emoji-input/emoji-picker";

const ChatMessageInput = () => {        
    const [message, setMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const { isOpen, onOpen, onClose } = EmojiPickerStore();

    const messageInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (message.trim()) {
            // TODO: Implement send message logic
            console.log("Sending message:", message);
            setMessage("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="flex items-center justify-center h-28 border-t bg-white">
            <div className="flex-1 px-4 flex items-center gap-2">
                <Button variant="ghost" size="icon" className="cursor-pointer ">
                    <Plus className="h-6 w-6" />
                </Button>
                <EmojiPicker />
                <Textarea 
                    rows={1}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..." 
                    className="flex-1 bg-muted/50 border-0 focus-visible:ring-0 resize-none min-h-0 h-14 py-2"
                />
                <Button variant="ghost" size="icon" className="cursor-pointer ">
                    <Mic className="h-6 w-6" />
                </Button>
                <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={handleSubmit}
                    disabled={!message.trim()}
                    className="cursor-pointer border border-gray-300"
                >
                    <Send className="h-6 w-6" />
                </Button>
            </div>
        </div>
    )
}

export default ChatMessageInput;
