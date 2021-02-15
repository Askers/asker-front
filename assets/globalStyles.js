import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: '맑은 고딕', 'malgun gothic', 'AppleGothicNeoSD', 'Apple SD 산돌고딕 Neo', 'Microsoft NeoGothic',  'Droid sans', sans-serif;
        font-size: 16px;
        color: #1A1E2C;
        background-color: #E7E9F0;
        
    }
`;

export default GlobalStyles;
