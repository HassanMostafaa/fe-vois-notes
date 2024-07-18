"use client";
import { styled } from "styled-components";

export const SNav = styled.nav`
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  ul {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }
`;
