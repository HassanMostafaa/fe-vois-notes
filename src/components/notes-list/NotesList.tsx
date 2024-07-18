"use client";
import { type FunctionComponent, useState } from "react";
import { SCategoryButton, SGrid, SNotesList } from "./styles/NotesList.styles";
import useNoteStore, { useLoadNotes } from "@/src/store/useNotes";
import NoteCard from "../note-card/NoteCard";
import useNoteModal from "@/src/store/useModal";
import Modal from "../note-modal/NoteModal";
import useAddNoteModalStore from "@/src/store/useAddNoteModal";
import { StyledAddNoteModalButton } from "../add-note-modal/styles/AddNoteModal.styles";

export const NotesList: FunctionComponent = () => {
  const { notes } = useNoteStore();
  const { isOpen, selectedNote, closeModal } = useNoteModal();
  const { openAddNoteModal } = useAddNoteModalStore();
  const [categorySelected, setCategorySelected] = useState<string>("");
  useLoadNotes();

  return (
    <SNotesList>
      <SGrid>
        <div>
          {/* <p>Filter:</p> */}
          <SCategoryButton
            onClick={() => {
              if (categorySelected === "admin") {
                setCategorySelected("");
              } else {
                setCategorySelected("admin");
              }
            }}
            selected={categorySelected === "admin"}
          >
            Admin notes
          </SCategoryButton>

          <SCategoryButton selected={false} disabled>
            School
          </SCategoryButton>

          <SCategoryButton disabled selected={false}>
            Personal
          </SCategoryButton>
        </div>
      </SGrid>
      <SGrid>
        {notes?.map((note) =>
          categorySelected === "" ? (
            <NoteCard key={note.id} {...note} />
          ) : note?.level === categorySelected ? (
            <NoteCard key={note.id} {...note} />
          ) : null
        )}
        {notes?.length < 1 ? (
          <div style={{ textAlign: "center", width: "100%" }}>
            <p style={{ marginBlock: 20 }}>
              Click start to create and add your own personal notes 📝
            </p>
            <StyledAddNoteModalButton onClick={openAddNoteModal}>
              Start 🖊️
            </StyledAddNoteModalButton>
          </div>
        ) : (
          ""
        )}
      </SGrid>

      {isOpen && (
        <div>
          {/* Render modal content for full note here */}
          <Modal note={selectedNote} onClose={closeModal} />
        </div>
      )}
    </SNotesList>
  );
};
