import { createStitches, CSS as CWCSS } from "@stitches/react";
import CastWarsTheme from "./CastWars.theme";

const { config, createTheme, css, getCssText, globalCss, keyframes, styled } =
  createStitches({
    theme: CastWarsTheme,
    prefix: "CW-",
    media: CastWarsTheme.media,
  });

export { css, globalCss, keyframes, config, getCssText, styled };

export type CSS = CWCSS;
