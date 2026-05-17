import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Region } from '@/types/store';

interface RegionActions {
  setRegion: (region: Partial<Region>) => void;
}

type RegionStore = Region & RegionActions;

const defaultRegion: Region = {
  country: 'BR',
  currency: 'BRL',
  locale: 'pt-BR',
  currencySymbol: 'R$',
};

export const useRegionStore = create<RegionStore>()(
  persist(
    (set) => ({
      ...defaultRegion,
      setRegion: (region) => set((state) => ({ ...state, ...region })),
    }),
    {
      name: 'valutin-region-store',
    },
  ),
);
