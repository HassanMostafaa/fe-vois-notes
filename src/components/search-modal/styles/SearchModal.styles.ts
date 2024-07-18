import styled from "styled-components";

export const StyledSearchModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  max-height: 90%;
  overflow: auto;
  min-width: 50%;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
    min-width: 80%;
  }

  @media (max-width: 480px) {
    padding: 10px;
    min-width: 95%;
  }
`;

export const StyledSearchModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Styled Search Input
export const StyledSearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1px solid #999;
  }
`;

// Styled Results List
export const StyledResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Styled Loading Indicator
export const StyledLoadingIndicator = styled.p`
  text-align: center;
  font-style: italic;
  color: #ccc; /* Adjust color */
`;

// Styled Close Button
export const StyledCloseButton = styled.button`
  padding: 10px 20px;
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
