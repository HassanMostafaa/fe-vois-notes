import React, { useState, FunctionComponent } from "react";
import { Note } from "@/src/store/useNotes";
import { AiOutlineDelete } from "react-icons/ai";
import useNoteStore from "@/src/store/useNotes";
import useNoteModal from "@/src/store/useModal";
import {
  StyledNoteCard,
  StyledNoteTitle,
  StyledNoteContent,
  StyledNoteButtons,
  StyledNoteButton,
  StyledDelButton,
} from "./styles/NoteCard.styles";
import useSearchModalStore from "@/src/store/useSearchModal";

const NoteCard: FunctionComponent<Note> = ({ content, id, title, level }) => {
  const { notes, deleteNote } = useNoteStore();
  const { closeSearchModal } = useSearchModalStore();
  const { openModal } = useNoteModal();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleOpenModal = () => {
    openModal({ content, id, title });
  };

  const handleDelete = () => {
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    deleteNote(id);
    const updatedStateForLocalstorage = JSON.stringify(
      notes.filter((x: Note) => x.id !== id)
    );
    localStorage.setItem("notes", updatedStateForLocalstorage);
    setShowConfirmDelete(false);
    closeSearchModal();
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false);
  };

  return (
    <StyledNoteCard>
      {level === "admin" && (
        <p style={{ color: "#666", textAlign: "right", fontSize: 9 }}>
          ADMIN CREATED ✪
        </p>
      )}
      {title && <StyledNoteTitle>{title}</StyledNoteTitle>}
      {content && <StyledNoteContent>{content}</StyledNoteContent>}
      <StyledNoteButtons>
        {!showConfirmDelete && (
          <>
            <StyledNoteButton onClick={handleOpenModal}>View</StyledNoteButton>
            <StyledDelButton onClick={handleDelete}>
              <AiOutlineDelete />
            </StyledDelButton>
          </>
        )}
      </StyledNoteButtons>
      {showConfirmDelete && (
        <div
          className="confirm-delete"
          style={{ textAlign: "center", margin: "12px" }}
        >
          <p style={{ marginBlock: 12 }}>
            Are you sure you want to delete this note?
          </p>
          <StyledDelButton onClick={confirmDelete}>Yes</StyledDelButton>
          <StyledNoteButton onClick={cancelDelete}>No</StyledNoteButton>
        </div>
      )}
    </StyledNoteCard>
  );
};

export default NoteCard;
