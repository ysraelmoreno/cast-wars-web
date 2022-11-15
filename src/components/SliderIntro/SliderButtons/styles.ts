import { styled } from "@stitches/react";

export const SliderButtonsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
});

export const SliderButtonContainer = styled("div", {
  height: "128px",
  width: "100%",
  display: "flex",
  color: "white",
  backgroundImage:
    "linear-gradient(to right, rgba(255, 249, 249, 0.45), rgba(90, 90, 90, 0.45))",
  borderRadius: 6,

  "& + &": {
    marginTop: "15px",
  },
});

export const SliderButtonImage = styled("div", {
  height: "100%",
  width: "120px",

  img: {
    minWidth: "120px",
    width: "100%",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
});

export const SliderButtonContent = styled("div", {
  padding: 10,

  p: {
    fontSize: 12,
    opacity: 0.5,
    marginTop: 5,
  },
});
