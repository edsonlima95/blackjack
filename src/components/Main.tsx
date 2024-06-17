import { Button, ButtonGroup, ProgressBar } from "react-bootstrap";
import {
  FaHome,
  FaGamepad,
  FaSortDown,
  FaCartPlus,
  FaWallet,
  FaRegBell,
} from "react-icons/fa";
import Avatar from "../assets/avatar.jfif";

function Topbar() {
  return (
    <div className="bg-0A1428 flex flex-column  sidebar p-0">
      <div className="px-1 py-3 d-flex text-white w-100 justify-content-between">
        <div className="d-flex align-items-center">
          <Button className="d-inblock mx-2">
            <FaHome />
          </Button>
          |
          <Button className="d-inblock mx-2">
            <FaGamepad />
            <a>Game</a>
            <FaSortDown />
          </Button>
          <Button className="d-inblock mx-1">
            <FaCartPlus />
            <a>Market Place</a>
          </Button>
        </div>
        <div className="d-flex align-items-center">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">R$ 0.00</Button>
            <Button variant="secondary">
              <FaWallet></FaWallet> Wallet
            </Button>
          </ButtonGroup>
        </div>
        <div className="d-flex align-items-center mx-2">
          <div className="mx-2">
            <p className="mb-1">Fugusion 1</p>
            <ProgressBar label="asdf" now={60} className="w-100" />
          </div>
          <div>
            <img className="bd-rounded-50" width={"70px"} src={Avatar} alt="" />
            <FaSortDown />
            <FaRegBell />
          </div>
        </div>
      </div>
      <div className="flex-grow-1 bg-0D1830 w-100 h-auto"></div>
    </div>
  );
}

export default Topbar;
