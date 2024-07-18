"use client";
import { FunctionComponent } from "react";
import PageLayout from "../components/layout/Layout";
import { NotesList } from "../components/notes-list/NotesList";
import SearchModal from "../components/search-modal/SearchModal";
import useSearchModalStore from "../store/useSearchModal";
import useAddNoteModalStore from "../store/useAddNoteModal";
import AddNoteModal from "../components/add-note-modal/AddNoteModal";

const HomePage: FunctionComponent = () => {
  const { isOpen: isSearchModalOpen } = useSearchModalStore();
  const { isOpen: isAddNoteModalOpen } = useAddNoteModalStore();

  return (
    <PageLayout>
      <NotesList />
      {isSearchModalOpen && <SearchModal />}
      {isAddNoteModalOpen && <AddNoteModal />}
    </PageLayout>
  );
};

export default HomePage;
