import Image from "next/image";
import Menu from "../Menu";
import { HeaderContainer, HeaderWrapper, LogoContainer } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <Image src="/logo.png" alt="Cast Wars logo" width={80} height={80} />
        </LogoContainer>
        <Menu />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
