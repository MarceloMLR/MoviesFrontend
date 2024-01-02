import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 133, 155, 0.05);
  height: 14.5rem;
  padding: 0 12.3rem;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
  button {
    width: 100%;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    input {
      display: none;
    }
  }
`;
