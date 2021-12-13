import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${colors.background};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    max-width: 1400px;

    margin: 0 auto;
  }
`;

export default GlobalStyle;