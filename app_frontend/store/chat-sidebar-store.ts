import { create } from 'zustand'

interface ChatSidebar {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const ChatSidebarStore = create<ChatSidebar>((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: true })),
  onClose: () => set((state) => ({ isOpen: false })),
})) 