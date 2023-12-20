import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    height: 11.6rem;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12.3rem;
`

export const Logo = styled.h1`
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.PINK};
`