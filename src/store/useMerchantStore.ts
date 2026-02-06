import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Id } from '@/convex/_generated/dataModel';

interface MerchantStore {
  selectedMerchantId: Id<'merchants'> | null;
  setSelectedMerchant: (id: Id<'merchants'> | null) => void;
}

export const useMerchantStore = create<MerchantStore>()(
  persist(
    (set) => ({
      selectedMerchantId: null,
      setSelectedMerchant: (id) => set({ selectedMerchantId: id }),
    }),
    {
      name: 'merchant-store',
    }
  )
);
