"use client";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export interface Note {
  id: string;
  title: string;
  content: string;
  level?: "admin" | "user";
}

interface NoteStore {
  notes: Note[];
  addNote: (newNote: Note) => void;
  editNote: (id: string, title: string, content: string) => void;
  deleteNote: (id: string) => void;
}

const useNoteStore = create<NoteStore>((set) => ({
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes")!)
    : [
        {
          id: "note-1",
          title: "Grocery List",
          content: "- Milk\n- Bread\n- Eggs\n- Cheese",
          level: "admin",
        },
        {
          id: "note-2",
          title: "Meeting Notes",
          content:
            "- Discuss project timeline\n- Assign tasks\n- Review budget",
          level: "admin",
        },
        {
          id: "note-3",
          title: "Movie Recommendation",
          content: "The Shawshank Redemption - A must-watch classic!",
        },
        {
          id: "note-4",
          title: "Birthday Ideas",
          content:
            "- Book a restaurant reservation\n- Buy a gift\n- Plan a surprise party (optional)",
        },
        {
          id: "note-5",
          title: "Travel Checklist",
          content:
            "- Pack passport and ID\n- Book flights and accommodation\n- Research local attractions and activities",
        },
      ],
  addNote: (newNote: Note) => {
    set((state) => ({ notes: [...state.notes, newNote] }));
  },
  editNote: (id: string, title: string, content: string) => {
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, title, content } : note
      ),
    }));
  },
  deleteNote: (id: string) => {
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) }));
  },
}));

export default useNoteStore;
