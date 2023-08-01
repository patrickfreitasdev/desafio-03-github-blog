import { HeaderContainer, LogoContainer } from "./styles";
import logo from '../../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={logo} width={45} height={40} />
                <span>Github Blog</span>
            </LogoContainer>
        </HeaderContainer>
    )
}