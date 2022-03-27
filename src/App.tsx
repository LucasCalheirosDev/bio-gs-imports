import { ThemeProvider } from "styled-components";

import { HomeScreen } from "./screen";
import { GlobalStyle, mainTheme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <GlobalStyle />
        <HomeScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
