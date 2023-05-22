import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { lightTheme } from "./styles/themes/light";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
