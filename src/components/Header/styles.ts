import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 93px;

    background: ${(props) => props.theme['gray800']};

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 103px;
        height: 45px;
    }
    
`