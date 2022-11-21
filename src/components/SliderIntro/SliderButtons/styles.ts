import { styled } from "@stitches/react";

export const SliderButtonsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
});

export const SliderButtonImage = styled("div", {
  height: "100%",
  minWidth: "128px",
  maxWidth: "128px",
  width: "100%",
  transition: "all 0.2s ease",
  backgroundSize: "100%",
  backgroundPosition: "center",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px",
});

export const SliderButtonContent = styled("div", {
  padding: 10,

  p: {
    fontSize: 12,
    opacity: 0.5,
    marginTop: 15,
  },
});

export const SliderButtonContainer = styled("button", {
  height: "128px",
  width: "100%",
  display: "flex",
  backgroundColor: "transparent",
  border: "none",
  textAlign: "left",
  color: "white",
  backgroundImage:
    "linear-gradient(to right, rgba(255, 249, 249, 0.45), rgba(90, 90, 90, 0.45))",
  borderRadius: 6,
  transition: "all 0.5s ease",
  boxShadow: 0,
  "& + &": {
    marginTop: "15px",
  },

  "&:hover": {
    [`${SliderButtonImage}`]: {
      transition: "all 0.2s ease",
      backgroundSize: "110%",
    },
  },

  variants: {
    active: {
      true: {
        boxShadow: "1px 1px 20px 1px rgba(0, 0, 0, 0.6)",
      },
    },
  },
});
