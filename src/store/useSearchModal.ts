import { create } from "zustand";
interface SearchModalState {
  isOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;
}
const useSearchModalStore = create<SearchModalState>((set) => ({
  isOpen: false,
  openSearchModal: () => set({ isOpen: true }),
  closeSearchModal: () => set({ isOpen: false }),
}));

export default useSearchModalStore;
