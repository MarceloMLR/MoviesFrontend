import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  color: black;
  border-radius: 1rem;
  padding: 1.35rem 3rem;
  gap: 0.5rem;
  margin-top: 2.4rem;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
