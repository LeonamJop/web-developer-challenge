import styled from "styled-components";

export const FeedContainer = styled.div`
    width: 516px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: start;

    flex-direction: column;

    h1 {
        font-size: 14px;
        font-weight: 500;
        color: ${(props) => props.theme['gray200']};

        margin-bottom: 8px;
    }
`