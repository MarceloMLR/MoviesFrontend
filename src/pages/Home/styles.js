import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-columns: 100%;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 12.3rem;
`;

export const Head = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
  margin: 5rem 0 4rem;
  > h1 {
    font-size: 3.6rem;
    font-weight: 400;
  }
`;

export const FilmsWrapper = styled.div`
  height: 450px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  gap: 2.4rem;
`;
