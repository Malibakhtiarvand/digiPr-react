import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Toolbar } from "@mui/material";
import "./App.css";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import checkRerender from "./helpers/checkRerender";
import { Cache } from "./helpers/mui/cache";
import { Theme } from "./helpers/mui/theme";

function App(props) {
  checkRerender("App");
  return (
    <CacheProvider value={Cache}>
      <ThemeProvider theme={Theme}>
        <Header />
        <Toolbar />
        <div style={{ marginTop: "150px" }}>{props.children}</div>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
