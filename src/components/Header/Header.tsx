import Image from "next/image";
import Menu from "../Menu";
import { HeaderContainer, HeaderWrapper, LogoContainer } from "./styles";

interface IHeaderProps {
  color?: "primary" | "secondary";
}

function Header({ color }: IHeaderProps) {
  return (
    <HeaderWrapper>
      <HeaderContainer color={color}>
        <LogoContainer>
          <Image src="/logo.png" alt="Cast Wars logo" width={80} height={80} />
        </LogoContainer>
        <Menu color={color} />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
