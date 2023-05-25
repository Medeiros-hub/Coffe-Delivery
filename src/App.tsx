import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { lightTheme } from "./styles/themes/light";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./Router";
import { DrinkContextProvider } from "./contexts/DrinkContext";
import { LocationContextProvider } from "./contexts/LocationContext";

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <DrinkContextProvider>
          <LocationContextProvider>
            <AppRoutes />
          </LocationContextProvider>
        </DrinkContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
