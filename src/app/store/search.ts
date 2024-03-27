import { create } from 'zustand';

type State = {
  text: string;
  search: number;
};

type Action = {
  setForm: (text: string) => void;
};

export const useSearchStore = create<State & Action>((set) => ({
  text: '',
  search: 0,
  setForm: (text) => set((state) => ({ text, search: state.search + 1 })),
}));
