import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html {
        background-color: #7159c1;
        font-family: 'Roboto';
    }

    button {
        cursor: pointer;
    }

    .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected{
        background-color: #A8A8A8;
    }
    .ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
        background-color: #A8A8A8;
    }
`;
