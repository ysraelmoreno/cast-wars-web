import {
  MenuContainer,
  MenuItem,
  MenuItemWrapper,
  MenuWrapper,
} from "./styles";
import { FiHome } from "react-icons/fi";
import { useEffect, useState } from "react";

function Menu() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  return (
    <>
      <MenuContainer>
        <MenuWrapper>
          <MenuItemWrapper>
            <MenuItem active={location === "/"} href="/">
              <FiHome />
            </MenuItem>
            <MenuItem active={location === "/tv"} href="/tv">
              TV
            </MenuItem>
            <MenuItem active={location === "/noticias"} href="/noticias">
              Notícias
            </MenuItem>
            <MenuItem active={location === "/podcast"} href="/podcast">
              Podcast
            </MenuItem>
            <MenuItem active={location === "/artigos"} href="/artigos">
              Artigos
            </MenuItem>
            <MenuItem active={location === "/resenhas"} href="/resenhas">
              Resenhas
            </MenuItem>
          </MenuItemWrapper>
        </MenuWrapper>
      </MenuContainer>
    </>
  );
}

export default Menu;
