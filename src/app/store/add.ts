import { create } from 'zustand';

type State = {
  isActive: boolean;
  isClick: number;

  data?: {
    lat: number;
    lng: number;
    address: string;
  };
};

type Action = {
  reset: () => void;

  setActive: () => void;
  setClick: () => void;
  setData: (lat: number, lng: number, address: string) => void;
};

export const useAddStore = create<State & Action>((set) => ({
  isActive: false,
  isClick: 0,

  reset: () => set(() => ({ isActive: false, isClick: 0, data: undefined })),
  setActive: () => set(() => ({ isActive: true })),
  setClick: () => set((state) => ({ isClick: state.isClick + 1 })),
  setData: (lat, lng, address) => set(() => ({ data: { lat, lng, address } })),
}));
