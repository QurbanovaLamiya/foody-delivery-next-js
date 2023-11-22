import { createGlobalStyle } from "styled-components";
import colors from "./color";

const GlobalStyle = createGlobalStyle`
   * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
   }
   body {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 500;
   }

   ul li{
      list-style: none;
   }

   *::-webkit-scrollbar {
     width: 5px;
   }

  /* Track */
   *::-webkit-scrollbar-track {
     background: ${colors.white} ; 
     border-radius: 20px;
   }
 /* Handle */
   *::-webkit-scrollbar-thumb {
     background: ${colors.mainRed}; 
     border-radius: 20px;
   }
`;

export default GlobalStyle;
