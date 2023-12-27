import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  gap: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12.3rem;
`;

export const Logo = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Search = styled.div`
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;

  align-items: center;

  div {
    width: 12rem;
    display: flex;
    align-items: end;
    flex-direction: column;

    Strong {
      font-size: 16px;
    }
    button {
      width: 2.6rem;
      text-align: end;
      font-size: 14px;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      border: none;
    }
  }

  > a img {
    border: 1px solid #3e3b47;
    margin-left: 1rem;
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }
`;
