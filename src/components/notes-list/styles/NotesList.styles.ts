"use client";
import { styled } from "styled-components";

export const SNotesList = styled.div``;

export const SGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 12px;
  flex-wrap: wrap;
  /* border: 1px solid red; */
  margin: 50px 20px;
`;

export const SCategoryButton = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#007bff" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  border: 2px solid ${(props) => (props.selected ? "#007bff" : "#333")};
  border-radius: 5px;
  padding: 8px 12px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "#0056b3" : "#f0f0f0")};
    color: ${(props) => (props.selected ? "#fff" : "#333")};
    border-color: ${(props) => (props.selected ? "#0056b3" : "#333")};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
