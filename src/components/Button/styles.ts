import { styled } from "../../styles/Theme.provider";

export const ButtonContainer = styled("button", {
  padding: "10px 15px",
  border: "none",
  height: "40px",
  borderRadius: "5px",
  minWidth: "125px",
  transition: "all 0.2s ease",

  variants: {
    isDisabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
    variant: {
      primary: {
        backgroundColor: "#53ACFF",
        color: "white",
        "&:hover": {
          backgroundColor: "#377FC1",
        },
      },
      secondary: {
        backgroundColor: "transparent",
        border: "1px solid #fff",
        color: "white",

        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      },
      tertiary: {
        backgroundColor: "transparent",
        color: "white",
        border: "none",

        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
  },
});
