import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        font-family: Rubik;
        margin: 0;
        padding: 0;
      }
    `}
  />
);

export default GlobalStyles;
