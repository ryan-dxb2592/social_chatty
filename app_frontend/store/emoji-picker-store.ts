import { create } from 'zustand'

interface EmojiPicker {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const EmojiPickerStore = create<EmojiPicker>((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: true })),
  onClose: () => set((state) => ({ isOpen: false })),
})) 