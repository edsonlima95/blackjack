import Navbar from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import Topbar from "./components/Main";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

const theme = createTheme({
  /** Your theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="d-flex w-100">
        <div>
          <Sidebar>
            <Navbar />
          </Sidebar>
        </div>
        <div className="flex-grow-1">
          <Topbar></Topbar>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
