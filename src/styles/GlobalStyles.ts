import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      font-family: "Black Han Sans";
      box-sizing: border-box;
     }
    ${reset}
`;

export default GlobalStyles;
