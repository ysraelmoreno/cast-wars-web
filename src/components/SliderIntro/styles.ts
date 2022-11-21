import { styled } from "../../styles/Theme.provider";

export const SliderContainer = styled("section", {});

export const DimmerContainer = styled("div", {
  height: "800px",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  backgroundColor: "black",
  opacity: 0.3,
});

export const SliderContentContainer = styled("section", {
  maxWidth: 1240,
  width: "100%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "calc(100% - 139px)",
});

export const SliderTitle = styled("div", {
  color: "White",

  h1: {
    fontSize: "36px",
    fontWeight: 900,
  },
});

export const SliderInfoWrapper = styled("div", {
  maxWidth: 600,
  flex: "2 30px",
  p: {
    opacity: 0.5,
  },
});
