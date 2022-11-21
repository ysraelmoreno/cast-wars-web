import { styled } from "../../styles/Theme.provider";

export const PostContainer = styled("main", {
  maxWidth: "1240px",
  width: "100%",
  margin: "0 auto",
});

export const PostHeaderContainer = styled("section", {
  margin: "50px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const PostTitle = styled("h1", {
  fontWeight: 900,
  color: "$secondary",
  fontSize: "36px",
  marginTop: "20px",
});

export const PostData = styled("div", {
  display: "flex",
  marginBottom: "20px",

  div: {
    display: "flex",
    alignItems: "center",

    ["& + div"]: {
      marginLeft: "10px",
    },
    span: {
      marginLeft: "5px",
    },
  },
});

export const PostImage = styled("img", {
  borderRadius: "5px",
  boxShadow: "1px 2px 10px rgba(0,0,0, 0.5)",
});

export const DescriptionContainer = styled("div", {
  maxWidth: "1080px",
  width: "100%",
  margin: "0 auto",

  display: "flex",
  flexDirection: "column",

  ["& > figure"]: {
    display: "none",
  },

  ["& > figure ~ figure"]: {
    display: "flex",
  },
});
