import { css } from "styled-components";
import {createGlobalStyle} from 'styled-components';

import KanitFont from './KanitFont.woff';

// export const KanitFont = css`
//   @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
// `

export default createGlobalStyle`
  @font-face {
    font-family: 'Kanit', sans-serif;
    src: local('Kanit'), url(${KanitFont}) format(woff);
    font-weight: 300;
    font-style: normal;
  }
`