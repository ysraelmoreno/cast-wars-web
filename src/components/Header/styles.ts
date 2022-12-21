import { styled } from "../../styles/Theme.provider";

export const HeaderWrapper = styled("header", {
  padding: "10px",

  variants: {
    variant: {
      solid: {
        backgroundColor: "$secondary",
      },
      transparent: {},
    },
  },
});

export const HeaderContainer = styled("section", {
  maxWidth: "1240px",
  margin: "0 auto",
  width: "100%",
  padding: "10px",
  borderBottom: "2px solid white",

  variants: {
    color: {
      primary: {},
      secondary: {
        borderBottom: "2px solid $secondary",
      },
    },
  },
});

export const LogoContainer = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
