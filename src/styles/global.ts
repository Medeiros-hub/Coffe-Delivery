import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['purple-400']};
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    outline: none;
    border: 0;
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 87%;
    } 
  }
`