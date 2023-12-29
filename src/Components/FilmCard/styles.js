import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: rgba(255, 133, 155, 0.05);
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  border-radius: 1.6rem;
  gap: 1.5rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
