import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: max-content;

    display: flex;
    justify-content: center;
    align-items: start;

    gap: 32px;

    padding: 56px 24px 32px 24px;
    margin-bottom: 16px;

    color: ${(props) => props.theme['gray100']};
    background-color: ${(props) => props.theme['gray500']};

    border-radius: 3px;
    border: solid 1px ${(props) => props.theme['gray600']};

    img {
        min-width: 88px;
        height: 88px;

        border-radius: 36px;
    }

    button {
        position: relative;
        margin-top: -44px;
        margin-right: -12px;

        border: none;
        background-color: transparent;

        color: ${(props) => props.theme['red100']};
        cursor: pointer;
    }
`

export const CardContent = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: start;

    gap: 24px;

    flex-direction: column;
`

export const CardCreator = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: start;

    gap: 2px;

    flex-direction: column;

    span {
        color: ${(props) => props.theme['gray300']};
        font-size: 12px;
    }

    p {
        color: ${(props) => props.theme['gray200']};
        font-size: 14px;
    }
`