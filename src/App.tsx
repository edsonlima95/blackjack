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
import { FaArrowDown, FaSmile } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const theme = createTheme({
  /** Your theme override here */
});

function App() {
  const [state, setState] = useState(false);
  return (
    <MantineProvider theme={theme}>
      <div className="d-flex w-100">
        {state && (
          <div className="bg-0A1428 d-md-flex d-none  position-relative">
            <div className="navbar-left d-flex flex-column bg-131220 sidebar p-0">
              <Sidebar></Sidebar>
              <div className="flex-grow-1 bg-12111E w-100 h-auto overflow-y-scroll">
                <Navbar />
                <div className="position-absolute bottom-0 sms w-100">
                  <InputGroup className="px-3">
                    <div className="d-flex p-2 bg-191827 bd-rounded-5">
                      <Form.Control
                        placeholder="Say something ..."
                        aria-label="Recipient's username"
                        className=" bd-none c-8d8d8d bg-transparent"
                        aria-describedby="basic-addon2"
                      />
                      <Button
                        variant="outline-secondary"
                        className="d-inblock xy-center bd-rounded-5"
                      >
                        <FaSmile className="" />
                      </Button>
                      &nbsp;
                      <Button
                        variant="red"
                        className="bd-rounded-5  xy-center"
                        id="button-addon2"
                      >
                        <IoMdSend />
                      </Button>
                    </div>
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
            <div className="col-12 px-5 py-4 main-board">
              <div className="d-block d-lg-flex text-white f-ig board">
                <div className="col-lg-6 col-md-12 px-5 py-3">
                  <div className="w-100 h-100 bg-12111E bd-rounded-25">
                    <div className="px-5 py-3">
                      <div className=" ">
                        <h2 className="py-4">WELCOME BACK, FEGUSION1</h2>
                        <p className="py-4">Level 69</p>
                        <ProgressBar
                          id="progress-bar"
                          className="progress overflow-visible box-blur"
                          variant="secondary"
                          label={
                            <div className="right-0 bg-transparent indicator position-absolute">
                              <div
                                className="bg-transparent"
                                style={{ color: "white !important" }}
                              >
                                77%
                              </div>
                              <FaArrowDown className="bg-transparent"></FaArrowDown>
                            </div>
                          }
                          now={77}
                        />
                        <p className="py-4">28% XP away from Level 70</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 px-5 py-3">
                  <div className="w-100 h-100 xy-center bd-rounded-25 bg-12111E">
                    <div className="px-5 py-3">
                      <div className="d-flex mx-2">
                        <div className="">
                          <h2 className="f-ig py-3">MASSIVE GIVEAWAY</h2>
                          <p className="f-ig py-2">
                            We are currently giving away a Valkryrie Helm which
                            is worth <a>R$243,000</a>
                            Come join by clicking the button below..
                          </p>
                          <Button className="f-ig py-2" variant="red">
                            VIEW&nbsp;MORE
                          </Button>
                        </div>
                        <div>
                          <div className="img-blur">
                            <img src={AngCock} alt="" />
                          </div>
                          <div className="d-flex">
                            <img src={Meteor} alt="" />
                            <div className="w-50 mx-2 my-1 round-border"></div>
                          </div>
                          <p className="f-inter">Valkyrie Helm</p>
                          <p className="f-inter">R$243.8K</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="f-inter text-white f-32">Heat Originals</p>
              <div className="d-block d-lg-flex f-ig active heat">
                <div className=" col-lg-4 col-md-12 curser px-5 py-4">
                  <div className="bd-rounded-25 bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0 text-blur">CASE&BATTLES</h2>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-12 curser px-5 py-4">
                  <div className="bd-rounded-25 bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0 text-blur">CASES</h2>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-12 curser px-5 py-4">
                  <div className="bd-rounded-25 bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0 text-blur">MINES</h2>
                  </div>
                </div>
              </div>
              <div className="d-block d-lg-flex f-ig active heat">
                <div className=" col-lg-4 col-md-12 curser px-5 py-4">
                  <div className="bd-rounded-25 bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0 text-blur">BLACKJACK</h2>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-12 curser px-5 py-4">
                  <div className="bd-rounded-25 bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0 text-blur">CRASH</h2>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-12 curser px-5 py-4">
                  <div className="bd-rounded-25 bg-12111E xy-center px-5 py-5">
                    <h2 className="m-0 text-blur">LIMBO</h2>
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
