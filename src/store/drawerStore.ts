import { create } from 'zustand';

interface DrawerState {
  cartOpen: boolean;
  accountOpen: boolean;
}

interface DrawerActions {
  openCart: () => void;
  closeCart: () => void;
  openAccount: () => void;
  closeAccount: () => void;
  closeAll: () => void;
}

type DrawerStore = DrawerState & DrawerActions;

export const useDrawerStore = create<DrawerStore>()((set) => ({
  cartOpen: false,
  accountOpen: false,
  openCart: () => set({ cartOpen: true }),
  closeCart: () => set({ cartOpen: false }),
  openAccount: () => set({ accountOpen: true }),
  closeAccount: () => set({ accountOpen: false }),
  closeAll: () => set({ cartOpen: false, accountOpen: false }),
}));
