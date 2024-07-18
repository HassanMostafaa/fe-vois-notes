"use client";
import React, { useEffect, useRef, useState } from "react";
import useNoteModal from "@/src/store/useModal";
import { StyledModal, StyledModalContent } from "./styles/NoteModal.styles";
import useNoteStore from "@/src/store/useNotes";
import useSearchModalStore from "@/src/store/useSearchModal";

interface Note {
  id: string;
  title: string;
  content: string;
}

interface ModalProps {
  note?: Note;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ note, onClose }) => {
  const { isOpen, closeModal, openModal } = useNoteModal();
  const { deleteNote, notes, editNote } = useNoteStore();
  const { closeSearchModal } = useSearchModalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState(note?.title || "");
  const [editContent, setEditContent] = useState(note?.content || "");

  const handleCloseOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Element)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleCloseOutside);
    } else {
      document.removeEventListener("mousedown", handleCloseOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onClose]);

  if (!isOpen || !note) return null;

  const handleEdit = () => {
    setEditMode(true);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const handleSave = () => {
    if (!editTitle || !editContent) return;
    editNote(note.id, editTitle, editContent);
    setEditMode(false);
    closeModal();
    openModal({ ...note, title: editTitle, content: editContent });
    setTimeout(() => {
      localStorage.setItem(
        "notes",
        JSON.stringify(
          notes.map((x) =>
            x.id === note.id
              ? { ...x, title: editTitle, content: editContent }
              : x
          )
        )
      );
    }, 500);
  };

  return (
    <StyledModal className={isOpen ? "open" : "closed"}>
      <StyledModalContent ref={modalRef}>
        {!editMode && (
          <>
            <h2>{note.title}</h2>
            <pre>{note.content}</pre>
            <div className="modal-actions">
              <button onClick={onClose}>Close</button>
              <button onClick={handleEdit}>Edit</button>
              <button
                onClick={() => {
                  onClose();
                  deleteNote(note.id);
                  closeSearchModal();
                  localStorage.setItem(
                    "notes",
                    JSON.stringify(notes.filter((x) => x.id !== note.id))
                  );
                }}
              >
                Delete Note
              </button>
            </div>
          </>
        )}

        {editMode && (
          <>
            <h2>Edit Note</h2>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="edit-input"
            />
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="edit-textarea"
              rows={5}
            />
            <div className="modal-actions">
              <button onClick={() => setEditMode(false)}>Cancel</button>
              <button onClick={handleSave}>Save</button>
            </div>
          </>
        )}
      </StyledModalContent>
    </StyledModal>
  );
};

export default Modal;
