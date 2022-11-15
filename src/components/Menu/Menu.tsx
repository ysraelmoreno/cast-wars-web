import {
  MenuContainer,
  MenuItem,
  MenuItemWrapper,
  MenuWrapper,
} from "./styles";
import { FiHome } from "react-icons/fi";

function Menu() {
  return (
    <>
      <MenuContainer>
        <MenuWrapper>
          <MenuItemWrapper>
            <MenuItem active={window.location.pathname === "/"} href="/">
              <FiHome />
            </MenuItem>
            <MenuItem active={window.location.pathname === "/tv"} href="/tv">
              TV
            </MenuItem>
            <MenuItem
              active={window.location.pathname === "/noticias"}
              href="/noticias"
            >
              Notícias
            </MenuItem>
            <MenuItem
              active={window.location.pathname === "/podcast"}
              href="/podcast"
            >
              Podcast
            </MenuItem>
            <MenuItem
              active={window.location.pathname === "/artigos"}
              href="/artigos"
            >
              Artigos
            </MenuItem>
            <MenuItem
              active={window.location.pathname === "/resenhas"}
              href="/resenhas"
            >
              Resenhas
            </MenuItem>
          </MenuItemWrapper>
        </MenuWrapper>
      </MenuContainer>
    </>
  );
}

export default Menu;
