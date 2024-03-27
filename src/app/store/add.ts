import { create } from 'zustand';

type State = {
  isActive: boolean;
  isClick: boolean;

  data?: {
    lat: number;
    lng: number;
  };
};

type Action = {
  reset: () => void;

  setActive: () => void;
  setClick: () => void;
  setData: (lat: number, lng: number) => void;
};

export const useAddStore = create<State & Action>((set) => ({
  isActive: false,
  isClick: false,

  reset: () => set(() => ({ isActive: false, isClick: false, data: undefined })),
  setActive: () => set(() => ({ isActive: true })),
  setClick: () => set(() => ({ isClick: true })),
  setData: (lat, lng) => set(() => ({ data: { lat, lng } })),
}));
