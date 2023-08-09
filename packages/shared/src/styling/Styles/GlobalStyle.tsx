import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './ThemeType';

const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  html, body {
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
  }

    body {
        background-color:${({ theme }) => theme.body};
        font-family: 'Open Sans', sans-serif;
    }

  p, a {
    margin: 0;
  }

  a {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.padding[2]};
    height: ${({ theme }) => theme.padding[2]};
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.neutralDark};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.borderRadius[1]};
    background: ${({ theme }) => theme.textNeutral};
  }

  .react-tooltip {
    z-index: 99999 !important;
  }

  .json-container div, .__json-pretty__ {
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
  }

  .json-container div {
    height: calc(100vh - 50px);
  }

  .react-kanban-board {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    margin-left: ${({ theme }) => theme.padding[1]};
    margin-right: ${({ theme }) => theme.padding[1]};
    padding: 0;
  }

  .react-kanban-board > div {
    display: flex;
    width: 100%;
  }

  .react-kanban-column {
    flex: 1;
    background: ${({ theme }) => theme.banner};
    box-sizing: border-box;
  }

  .react-kanban-column > div > div > div {
    width: 100%;
  }

  .toggle-danger {
    background-color: ${({ theme }) => theme.danger} !important;
  }

  .toggle-pending {
    background: ${({ theme }) => theme.neutral} !important;
  }

  .toggle-success {
    background: ${({ theme }) => theme.success} !important;
  }

  .toggle {
    border-radius: 15px;
  }

  .toggle-wrapper {
    margin: 0;
    height: 100% !important;
  }

  .toggleContainer {
    border-radius: 15px;
    height: 30px !important;
  }

  .toggleOption {
    color: ${({ theme }) => theme.textPrimary} !important;
    height: 100% !important;
    line-height: 28px !important;
  }

  .toggleOption.selected {
    color: ${({ theme }) => theme.textSecondary} !important;
  }

  .dropdown-container {
    border: none !important;
    height: 18px !important;
  }

  .dropdown-heading {
    height: auto !important;
    padding: 0 !important;
  }

  .dropdown-content {
    z-index: 10 !important;
  }

  .__react_component_tooltip {
    font-size: ${({ theme }) => theme.fontSize[7]} !important;
  }

  .__react_component_tooltip.show {
    opacity: 1 !important;
  }

  .__react_component_tooltip .multi-line {
    text-align: left !important;
  }
`;

export default GlobalStyle;
