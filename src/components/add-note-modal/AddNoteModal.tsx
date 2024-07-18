import React, { useState } from "react";
import useAddNoteModalStore from "@/src/store/useAddNoteModal";
import useNoteStore, { Note } from "@/src/store/useNotes";
import {
  StyledAddNoteModalOverlay,
  StyledAddNoteModal,
  StyledAddNoteModalContent,
  StyledAddNoteModalTitle,
  StyledAddNoteModalForm,
  StyledAddNoteModalLabel,
  StyledAddNoteModalInput,
  StyledAddNoteModalTextArea,
  StyledAddNoteModalButtons,
  StyledAddNoteModalButton,
} from "./styles/AddNoteModal.styles";
import { v4 as uuidv4 } from "uuid";

const AddNoteModal: React.FC = () => {
  const { isOpen, closeAddNoteModal } = useAddNoteModalStore();
  const { addNote, notes } = useNoteStore();
  const [newNote, setNewNote] = useState<Note>({
    content: "",
    title: "",
    id: uuidv4(),
  });
  const [validationError, setValidationError] = useState(""); // State for validation error message

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    closeAddNoteModal();
  };

  const handleAddNote = () => {
    const trimmedTitle = newNote.title.trim();
    const trimmedContent = newNote.content.trim();

    if (!trimmedTitle) {
      setValidationError("Please enter a title for your note.");
      return;
    }

    if (!trimmedContent) {
      setValidationError("Please enter some content for your note.");
      return;
    }

    // Validation passed, add note
    addNote({ ...newNote, title: trimmedTitle, content: trimmedContent });
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
    closeAddNoteModal();
    setValidationError(""); // Clear validation error on successful submission
  };

  return (
    <>
      <StyledAddNoteModalOverlay onClick={handleOverlayClick}>
        <StyledAddNoteModal>
          <StyledAddNoteModalContent>
            <StyledAddNoteModalTitle>Add Note</StyledAddNoteModalTitle>
            <StyledAddNoteModalForm onSubmit={(e) => e.preventDefault()}>
              <StyledAddNoteModalLabel htmlFor="title">
                Title:
              </StyledAddNoteModalLabel>
              <StyledAddNoteModalInput
                type="text"
                id="title"
                value={newNote.title}
                onChange={(e) =>
                  setNewNote((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              {validationError && ( // Display validation error if present
                <p style={{ color: "red", fontSize: "0.8rem" }}>
                  {validationError}
                </p>
              )}
              <StyledAddNoteModalLabel htmlFor="content">
                Content:
              </StyledAddNoteModalLabel>
              <StyledAddNoteModalTextArea
                id="content"
                value={newNote.content}
                onChange={(e) =>
                  setNewNote((prev) => ({ ...prev, content: e.target.value }))
                }
              />
              <StyledAddNoteModalButtons>
                <StyledAddNoteModalButton type="submit" onClick={handleAddNote}>
                  Add Note
                </StyledAddNoteModalButton>
                <StyledAddNoteModalButton
                  type="button"
                  onClick={closeAddNoteModal}
                >
                  Cancel
                </StyledAddNoteModalButton>
              </StyledAddNoteModalButtons>
            </StyledAddNoteModalForm>
          </StyledAddNoteModalContent>
        </StyledAddNoteModal>
      </StyledAddNoteModalOverlay>
    </>
  );
};

export default AddNoteModal;
