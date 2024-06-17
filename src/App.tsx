import Navbar from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { createTheme, MantineProvider } from "@mantine/core";
import Navigator from "./components/BreadCrumb";
import { Button, Form, InputGroup, ProgressBar } from "react-bootstrap";
import Meteor from "./assets/meteor.svg";
import AngCock from "./assets/angcock.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./App.css";
import { useState } from "react";

const theme = createTheme({
  /** Your theme override here */
});

function App() {
  const [state, setState] = useState(false);
  return (
    <MantineProvider theme={theme}>
      <div className="d-flex w-100">
        {state && (
          <div className="bg-0A1428 d-md-flex d-none">
            <div className="navbar-left d-flex flex-column bg-131220 sidebar p-0">
              <Sidebar></Sidebar>
              <div className="flex-grow-1 bg-12111E w-100 h-auto position-relative">
                <Navbar />
                <div className="position-absolute bottom-0 sms w-100">
                  <InputGroup className="px-3">
                    <Form.Control
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      className="bg-191827 bd-none c-46435f"
                      aria-describedby="basic-addon2"
                    />
                    <Button
                      variant="red"
                      className="bd-rounded-5"
                      id="button-addon2"
                    >
                      Button
                    </Button>
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex-grow-1">
          <div className="bg-0A1428 flex flex-column  sidebar p-0">
            <Main state={state} setState={setState}></Main>
            <div className="flex-grow-1 bg-191827 w-100 h-auto">
              <Navigator></Navigator>
            </div>
            <div className="col-12 px-5 py-4">
              <div className="d-block d-lg-flex text-white f-ig board">
                <div className="col-lg-6 col-md-12 px-5 py-3">
                  <div className="">
                    <h2 className="py-4">WELCOME BACK, FEGUSION1</h2>
                    <p className="py-4">Level 69</p>
                    <ProgressBar variant="secondary" now={40} />
                    <p className="py-4">28% XP away from Level 70</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 px-3 py-4">
                  <div className="d-flex mx-2">
                    <div className="">
                      <h2 className="f-ig py-3">MASSIVE GIVEAWAY</h2>
                      <p className="f-ig py-2">
                        We are currently giving away a Valkryrie Helm which is
                        worth <a>R$243,000</a>
                        Come join by clicking the button below..
                      </p>
                      <Button className="f-ig py-2" variant="red">
                        VIEW&nbsp;MORE
                      </Button>
                    </div>
                    <div>
                      <img src={AngCock} alt="" />
                      <div className="d-flex">
                        <img src={Meteor} alt="" />
                      </div>
                      <p>Valkyrie Helm</p>
                      <p>R$243.8K</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="f-inter text-white">Heat Originals</p>
              <div className="d-block d-lg-flex f-ig active heat">
                <div className=" col-lg-4 col-md-12 curser px-2 py-1">
                  <div className="bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0">CASE&BATTLES</h2>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-12 curser px-2 py-1">
                  <div className="bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0">CASES</h2>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-12 curser px-2 py-1">
                  <div className="bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0">MINES</h2>
                  </div>
                </div>
              </div>
              <div className="d-block d-lg-flex f-ig active heat">
                <div className=" col-lg-4 col-md-12 curser px-2 py-1">
                  <div className="bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0">BLACKJACK</h2>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-12 curser px-2 py-1">
                  <div className="bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0">CRASH</h2>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-12 curser px-2 py-1">
                  <div className="bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0">LIMBO</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
