import styled from "styled-components";

const StyledNoteCard = styled.div`
  background: linear-gradient(145deg, #f3f4f6, #ffffff);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    /* transform: translateY(-5px); */
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  }
`;

const StyledNoteTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
`;

const StyledNoteContent = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const StyledNoteButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const StyledNoteButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  margin-left: 5px;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

const StyledDelButton = styled.button`
  background-color: #fff;
  border: 2px solid #dc3545;
  border-radius: 5px;
  padding: 8px 12px;
  margin-left: 5px;
  cursor: pointer;
  color: #dc3545;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #dc3545;
    color: #fff;
    transform: translateY(-2px);
  }
`;

export {
  StyledNoteCard,
  StyledNoteTitle,
  StyledNoteContent,
  StyledNoteButtons,
  StyledNoteButton,
  StyledDelButton,
};
