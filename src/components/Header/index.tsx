import { HeaderContainer } from "./styles";

import logoImg from '../../assets/web-challenge-logo.png'

export function Header() {
    return (
        <HeaderContainer >
            <img src={logoImg} alt="" />
        </HeaderContainer>
    )
}