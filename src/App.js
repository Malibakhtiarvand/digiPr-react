import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Toolbar } from "@mui/material";
import "./App.css";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Main from "./component/main/Main";
import checkRerender from "./helpers/checkRerender";
import { Cache } from "./helpers/mui/cache";
import { Theme } from "./helpers/mui/theme";

function App() {
  checkRerender("App")
  return (
    <CacheProvider value={Cache}>
      <ThemeProvider theme={Theme}>
        <Header />
        <Toolbar /> 
        <Main />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
