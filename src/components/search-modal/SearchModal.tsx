"use client";
import React, { useState, useEffect } from "react";
import useNoteStore, { Note } from "@/src/store/useNotes";
import useSearchModalStore from "@/src/store/useSearchModal";
import NoteCard from "../note-card/NoteCard";
import {
  StyledSearchModal,
  StyledSearchModalContent,
  StyledSearchInput,
  StyledResultsList,
  StyledLoadingIndicator,
  StyledCloseButton,
  StyledModalOverlay,
} from "./styles/SearchModal.styles";

const SearchModal: React.FC = () => {
  const { notes } = useNoteStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { closeSearchModal } = useSearchModalStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleFilterNotes = () => {
    const filtered = notes.filter((note) => {
      const lowerCaseTitle = note.title.toLowerCase();
      const lowerCaseContent = note.content.toLowerCase();
      const searchText = searchTerm.toLowerCase();
      return (
        lowerCaseTitle.includes(searchText) ||
        lowerCaseContent.includes(searchText)
      );
    });
    setFilteredNotes(filtered);
    setLoading(false);
  };

  useEffect(() => {
    handleFilterNotes();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const searchExe = setTimeout(() => {
      handleFilterNotes();
    }, 500);

    return () => clearTimeout(searchExe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <>
      <StyledModalOverlay onClick={closeSearchModal} />{" "}
      {/* Overlay behind the modal */}
      <StyledSearchModal>
        <StyledSearchModalContent>
          <h2>Search Notes</h2>
          <StyledSearchInput
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search by title or content"
          />
          {filteredNotes.length > 0 ? (
            <StyledResultsList>
              {!isLoading && searchTerm !== "" && (
                <>
                  {filteredNotes.map((note) => (
                    <NoteCard key={note.id} {...note} />
                  ))}
                </>
              )}
            </StyledResultsList>
          ) : (
            <p>No notes found matching your search criteria.</p>
          )}

          {isLoading && (
            <StyledLoadingIndicator>LOADING...</StyledLoadingIndicator>
          )}
          <br />
          <StyledCloseButton onClick={closeSearchModal}>
            Close
          </StyledCloseButton>
        </StyledSearchModalContent>
      </StyledSearchModal>
    </>
  );
};

export default SearchModal;
