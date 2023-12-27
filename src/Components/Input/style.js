import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  padding: 2rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  input {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.4rem;
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    flex-shrink: 0;
  }
`;
