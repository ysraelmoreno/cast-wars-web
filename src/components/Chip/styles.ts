import { styled } from "../../styles/Theme.provider";

export const ChipContainer = styled("div", {
  padding: "10px 25px",
  border: "1px solid #fff",
  display: "flex",
  width: "fit-content",
  borderRadius: "50px",
  fontSize: "12px",

  variants: {
    color: {
      primary: {},
      secondary: {
        color: "$secondary",
        borderColor: "$secondary",
      },
    },
  },
});
