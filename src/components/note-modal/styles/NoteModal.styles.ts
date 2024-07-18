import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;

  &.open {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  &.closed {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
  }
`;

const StyledModalContent = styled.div`
  background-color: #fff;
  padding: 25px;
  max-height: 90%;
  overflow: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  h2 {
    margin: 20px 0;
    font-size: 1.5rem;
    color: #333;
  }

  pre {
    max-width: 100%;
    white-space: pre-wrap;
    background-color: #f7f7f7;
    padding: 10px;
    border-radius: 5px;
  }

  input.edit-input,
  textarea.edit-textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  textarea.edit-textarea {
    resize: vertical;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    button {
      margin-left: 10px;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #007bff;
      color: white;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #0056b3;
      }

      &:first-child {
        background-color: #6c757d;
        &:hover {
          background-color: #5a6268;
        }
      }
    }
  }
`;

export { StyledModal, StyledModalContent };
