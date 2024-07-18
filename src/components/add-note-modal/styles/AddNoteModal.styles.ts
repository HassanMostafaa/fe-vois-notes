import styled from "styled-components";

export const StyledAddNoteModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity for desired dimness */
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAddNoteModal = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 700px; /* Adjust width as needed */
`;

export const StyledAddNoteModalContent = styled.div`
  /* No animation styles here */
`;

export const StyledAddNoteModalTitle = styled.h2`
  margin-bottom: 15px;
`;

export const StyledAddNoteModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledAddNoteModalLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const StyledAddNoteModalInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  width: 100%; /* Make input full width */
  &::focus {
    outline: none;
    border: 1px solid #999;
  }
`;

export const StyledAddNoteModalTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  min-height: 150px; /* Adjust minimum height as needed */
  width: 100%; /* Make textarea full width */
  &::focus {
    outline: none;
    border: 1px solid #999;
  }
`;

export const StyledAddNoteModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const StyledAddNoteModalButton = styled.button`
  padding: 10px 20px;
  background-color: #ddd; /* Adjust background color */
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

export default StyledAddNoteModal;
