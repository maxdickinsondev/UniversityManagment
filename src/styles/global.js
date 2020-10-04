import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html {
        background-color: #7159c1;
    }

    button {
        cursor: pointer;
    }
`;