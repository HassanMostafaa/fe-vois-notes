import { create } from "zustand";
import { Note } from "./useNotes";

interface NoteModalState {
  isOpen: boolean;
  selectedNote?: Note;
  openModal: (note: Note) => void;
  closeModal: () => void;
}

const useNoteModal = create<NoteModalState>((set) => ({
  isOpen: false,
  selectedNote: undefined,
  openModal: (note?: Note) => set(() => ({ isOpen: true, selectedNote: note })),
  closeModal: () => set({ isOpen: false, selectedNote: undefined }), // Corrected typo
}));

export default useNoteModal;
