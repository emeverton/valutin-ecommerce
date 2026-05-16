import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { CartItem } from '@/types/store';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

interface CartActions {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
  immer((set) => ({
    items: [],
    isOpen: false,
    addItem: (item) =>
      set((state) => {
        const existingItem = state.items.find(
          (cartItem) => cartItem.id === item.id && cartItem.size === item.size,
        );

        if (existingItem) {
          existingItem.quantity += item.quantity;
          return;
        }

        state.items.push(item);
      }),
    removeItem: (id) =>
      set((state) => {
        state.items = state.items.filter((item) => item.id !== id);
      }),
    updateQuantity: (id, quantity) =>
      set((state) => {
        const item = state.items.find((cartItem) => cartItem.id === id);

        if (!item) {
          return;
        }

        item.quantity = quantity;
      }),
    clearCart: () =>
      set((state) => {
        state.items = [];
      }),
    openCart: () =>
      set((state) => {
        state.isOpen = true;
      }),
    closeCart: () =>
      set((state) => {
        state.isOpen = false;
      }),
  })),
);
