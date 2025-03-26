import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
export type MessageType = 'text' | 'image' | 'file' | 'voice' | 'call_received' | 'call_missed';

export interface MessageMedia {
  url: string;
  fileName?: string;
  fileSize?: number;
  mimeType: string;
  duration?: number; // For voice messages
  thumbnailUrl?: string; // For images
}

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  media?: MessageMedia;
  senderId: string;
  timestamp: string;
  isRead: boolean;
  status: 'sending' | 'sent' | 'delivered' | 'failed';
}

export interface Chat {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
  updatedAt: string;
}

export interface Notification {
  id: string;
  type: 'message' | 'friend_request';
  content: string;
  timestamp: string;
  isRead: boolean;
  relatedId?: string; // ID of the related chat or user
}

interface ChatState {
  // State
  chats: Chat[];
  activeChatId: string | null;
  notifications: Notification[];
  
  // Actions
  setActiveChat: (chatId: string) => void;
  addChat: (chat: Chat) => void;
  updateChat: (chatId: string, updates: Partial<Chat>) => void;
  addNotification: (notification: Notification) => void;
  markNotificationAsRead: (notificationId: string) => void;
  markAllNotificationsAsRead: () => void;
  clearNotifications: () => void;
  
  // Media handling actions
  uploadMedia: (file: File, chatId: string) => Promise<void>;
  retryFailedMessage: (messageId: string, chatId: string) => void;
  deleteMessage: (messageId: string, chatId: string) => void;
}

// Dummy data
const dummyChats: Chat[] = [
  {
    id: '1',
    participants: ['user1', 'user2'],
    lastMessage: {
      id: 'm1',
      type: 'text',
      content: 'Hey, how are you?',
      senderId: 'user2',
      timestamp: new Date().toISOString(),
      isRead: true,
      status: 'delivered'
    },
    unreadCount: 0,
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    participants: ['user1', 'user3'],
    lastMessage: {
      id: 'm2',
      type: 'image',
      content: '',
      media: {
        url: 'https://example.com/image.jpg',
        fileName: 'vacation.jpg',
        mimeType: 'image/jpeg',
        thumbnailUrl: 'https://example.com/thumb.jpg'
      },
      senderId: 'user3',
      timestamp: new Date().toISOString(),
      isRead: false,
      status: 'sent'
    },
    unreadCount: 1,
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    participants: ['user1', 'user4'],
    lastMessage: {
      id: 'm3',
      type: 'voice',
      content: '',
      media: {
        url: 'https://example.com/voice.mp3',
        fileName: 'voice-message.mp3',
        mimeType: 'audio/mpeg',
        duration: 45
      },
      senderId: 'user4',
      timestamp: new Date().toISOString(),
      isRead: true,
      status: 'delivered'
    },
    unreadCount: 0,
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    participants: ['user1', 'user5'],
    lastMessage: {
      id: 'm4',
      type: 'call_received',
      content: 'Call received',
      senderId: 'user5',
      timestamp: new Date().toISOString(),
      isRead: true,
      status: 'delivered'
    },
    unreadCount: 0,
    updatedAt: new Date().toISOString(),
  },
  {
    id: '5',
    participants: ['user1', 'user6'],
    lastMessage: {
      id: 'm5',
      type: 'call_missed',
      content: 'Missed call',
      senderId: 'user6',
      timestamp: new Date().toISOString(),
      isRead: false,
      status: 'delivered'
    },
    unreadCount: 1,
    updatedAt: new Date().toISOString(),
  }
];

const dummyNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'message',
    content: 'New message from John',
    timestamp: new Date().toISOString(),
    isRead: false,
    relatedId: '1',
  },
  {
    id: 'n2',
    type: 'friend_request',
    content: 'Alice sent you a friend request',
    timestamp: new Date().toISOString(),
    isRead: true,
    relatedId: 'user4',
  },
];

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      // Initial state
      chats: dummyChats,
      activeChatId: null,
      notifications: dummyNotifications,

      // Actions
      setActiveChat: (chatId) => set({ activeChatId: chatId }),
      
      addChat: (chat) =>
        set((state) => ({
          chats: [...state.chats, chat],
        })),
      
      updateChat: (chatId, updates) =>
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === chatId ? { ...chat, ...updates } : chat
          ),
        })),
      
      addNotification: (notification) =>
        set((state) => ({
          notifications: [notification, ...state.notifications],
        })),
      
      markNotificationAsRead: (notificationId) =>
        set((state) => ({
          notifications: state.notifications.map((notification) =>
            notification.id === notificationId
              ? { ...notification, isRead: true }
              : notification
          ),
        })),
      
      markAllNotificationsAsRead: () =>
        set((state) => ({
          notifications: state.notifications.map((notification) => ({
            ...notification,
            isRead: true,
          })),
        })),
      
      clearNotifications: () => set({ notifications: [] }),

      // Media handling actions
      uploadMedia: async (file, chatId) =>
        set((state) => {
          // This is a placeholder - in real implementation, 
          // you would handle the actual file upload to your backend
          const newMessage: Message = {
            id: Date.now().toString(),
            type: file.type.startsWith('image/') ? 'image' : 
                  file.type.startsWith('audio/') ? 'voice' : 'file',
            content: '',
            media: {
              url: URL.createObjectURL(file),
              fileName: file.name,
              fileSize: file.size,
              mimeType: file.type,
            },
            senderId: 'user1', // Replace with actual user ID
            timestamp: new Date().toISOString(),
            isRead: false,
            status: 'sending'
          };

          return {
            chats: state.chats.map(chat =>
              chat.id === chatId
                ? { ...chat, lastMessage: newMessage }
                : chat
            )
          };
        }),

      retryFailedMessage: (messageId, chatId) =>
        set((state) => ({
          chats: state.chats.map(chat =>
            chat.id === chatId
              ? {
                  ...chat,
                  lastMessage: chat.lastMessage?.id === messageId
                    ? { ...chat.lastMessage, status: 'sending' }
                    : chat.lastMessage
                }
              : chat
          )
        })),

      deleteMessage: (messageId, chatId) =>
        set((state) => ({
          chats: state.chats.map(chat =>
            chat.id === chatId && chat.lastMessage?.id === messageId
              ? { ...chat, lastMessage: undefined }
              : chat
          )
        })),
    }),
    {
      name: 'chat-storage',
    }
  )
); 