import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 12.3rem;

  div {
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    width: 100%;

    margin-top: 5rem;
    > h1 {
      font-size: 3.6rem;
      font-weight: 400;
    }
  }
`;
