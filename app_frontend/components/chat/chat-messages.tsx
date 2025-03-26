'use client'

import { useChatStore } from '@/store/chat-store';
import { Message, MessageType } from '@/store/chat-store';
import { format } from 'date-fns';
import { Phone, PhoneMissed, Image, File, Mic, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const MessageBubble = ({ message, isOwnMessage }: { message: Message; isOwnMessage: boolean }) => {
  const getMessageContent = () => {
    switch (message.type) {
      case 'text':
        return <p className="text-sm">{message.content}</p>;
      
      case 'image':
        return (
          <div className="relative group">
            <img 
              src={message.media?.thumbnailUrl || message.media?.url} 
              alt={message.media?.fileName || 'Image'}
              className="max-w-[200px] rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <a 
                href={message.media?.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                View
              </a>
            </div>
          </div>
        );
      
      case 'voice':
        return (
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            <span className="text-sm">{message.media?.duration}s</span>
            <audio controls className="h-8">
              <source src={message.media?.url} type={message.media?.mimeType} />
            </audio>
          </div>
        );
      
      case 'file':
        return (
          <div className="flex items-center gap-2">
            <File className="w-4 h-4" />
            <a 
              href={message.media?.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              {message.media?.fileName}
            </a>
          </div>
        );
      
      case 'call_received':
        return (
          <div className="flex items-center gap-2 text-green-600">
            <Phone className="w-4 h-4" />
            <span className="text-sm">Call received</span>
          </div>
        );
      
      case 'call_missed':
        return (
          <div className="flex items-center gap-2 text-red-600">
            <PhoneMissed className="w-4 h-4" />
            <span className="text-sm">Missed call</span>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={cn(
      "flex w-full",
      isOwnMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[70%] rounded-lg p-3",
        isOwnMessage 
          ? "bg-blue-500 text-white" 
          : "bg-gray-100 text-gray-900"
      )}>
        {getMessageContent()}
        <div className={cn(
          "text-xs mt-1",
          isOwnMessage ? "text-blue-100" : "text-gray-500"
        )}>
          {format(new Date(message.timestamp), 'HH:mm')}
        </div>
      </div>
    </div>
  );
};

const ChatMessages = () => {
  const { chats, activeChatId } = useChatStore();
//   const activeChat = chats.find(chat => chat.id === activeChatId);
  const activeChat = chats.find(chat => chat.id === "1");


  if (!activeChat) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Select a chat to view messages</p>
      </div>
    );
  }

  // Create a list of messages for demonstration
  const messages: Message[] = [
    {
      id: 'm1',
      type: 'text',
      content: 'Hey, how are you?',
      senderId: 'user2',
      timestamp: new Date().toISOString(),
      isRead: true,
      status: 'delivered'
    },
    {
      id: 'm2',
      type: 'image',
      content: '',
      media: {
        url: 'https://example.com/image.jpg',
        fileName: 'vacation.jpg',
        mimeType: 'image/jpeg',
        thumbnailUrl: 'https://example.com/thumb.jpg'
      },
      senderId: 'user1',
      timestamp: new Date().toISOString(),
      isRead: true,
      status: 'delivered'
    },
    {
      id: 'm3',
      type: 'voice',
      content: '',
      media: {
        url: 'https://example.com/voice.mp3',
        fileName: 'voice-message.mp3',
        mimeType: 'audio/mpeg',
        duration: 45
      },
      senderId: 'user2',
      timestamp: new Date().toISOString(),
      isRead: true,
      status: 'delivered'
    },
    {
      id: 'm4',
      type: 'file',
      content: '',
      media: {
        url: 'https://example.com/document.pdf',
        fileName: 'project_document.pdf',
        mimeType: 'application/pdf',
        fileSize: 1024 * 1024
      },
      senderId: 'user1',
      timestamp: new Date().toISOString(),
      isRead: true,
      status: 'delivered'
    },
    {
      id: 'm5',
      type: 'call_received',
      content: 'Call received',
      senderId: 'user2',
      timestamp: new Date().toISOString(),
      isRead: true,
      status: 'delivered'
    },
    {
      id: 'm6',
      type: 'call_missed',
      content: 'Missed call',
      senderId: 'user2',
      timestamp: new Date().toISOString(),
      isRead: true,
      status: 'delivered'
    }
  ];

  return (
    <div className="flex flex-col h-full">
      

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwnMessage={message.senderId === 'user1'}
          />
        ))}
      </div>

      
    </div>
  );
};

export default ChatMessages;
