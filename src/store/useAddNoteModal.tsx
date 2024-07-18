import { create } from "zustand";

type IAddNoteStore = {
  isOpen: boolean;
  openAddNoteModal: () => void;
  closeAddNoteModal: () => void;
};

const initialState = {
  isOpen: false,
  openAddNoteModal: () => {},
  closeAddNoteModal: () => {},
};

const useAddNoteModalStore = create<IAddNoteStore>((set) => ({
  ...initialState,
  openAddNoteModal: () => set({ isOpen: true }),
  closeAddNoteModal: () => set({ isOpen: false }),
}));

export default useAddNoteModalStore;
