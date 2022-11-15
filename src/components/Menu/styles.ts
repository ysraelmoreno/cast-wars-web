import { styled } from "../../styles/Theme.provider";
import Link from "next/link";

export const MenuContainer = styled("nav", {
  width: "100%",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
});

export const MenuWrapper = styled("div", {
  maxWidth: "1240px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "10px",

  img: {
    maxWidth: "80px",
    maxHeight: "80px",
    width: "100%",
    height: "100%",
  },
});

export const MenuItemWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const MenuItem = styled(Link, {
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  fontWeight: 400,
  fontSize: 12,
  opacity: 0.5,
  transition: "all 0.2s ease",

  "& + a": {
    marginLeft: "15px",
  },

  "&:hover": {
    opacity: 1,
  },

  variants: {
    active: {
      true: {
        opacity: 1,
      },
    },
  },
});
