import { createGlobalStyle } from 'styled-components';

import githubBg from '../assets/github-bg.svg';


export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }

   ::-webkit-scrollbar-track {
      background-color: #F4F4F4;
   }
   ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
   }
   ::-webkit-scrollbar-thumb {
      background: #dad7d7;
   }

   body {
      background-image: url(${githubBg});
      background-repeat: no-repeat;
      background-position: 70% top;

      background-color: #f0f0f5;
      -webkit-font-smooth: antialiased;
   }

   body, input, button {
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
   }

   button {
      cursor: pointer;
   }

   #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
   }
`;
