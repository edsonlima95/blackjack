import { Button, ButtonGroup, ProgressBar } from "react-bootstrap";
import {
  FaHome,
  FaGamepad,
  FaSortDown,
  FaCartPlus,
  FaWallet,
  FaRegBell,
  FaChevronRight,
} from "react-icons/fa";
import Avatar from "../assets/avatar.svg";
import { Dispatch, SetStateAction } from "react";

function Topbar({
  state,
  setState,
}: {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="px-1 py-3 bg-131220 d-flex text-white w-100 justify-content-between">
      <div className="d-flex align-items-center">
        <Button
          variant="secondary"
          onClick={() => setState(!state)}
          className="d-inblock mx-2 xy-center"
        >
          <FaChevronRight className="my-1" />
        </Button>
        <Button variant="secondary" className="d-inblock mx-2 xy-center">
          <FaHome className="my-1" />
        </Button>
        |
        <Button variant="secondary" className="d-inblock mx-2 xy-center">
          <FaGamepad className="active" />
          <p className="mx-1 my-0 f-poppins">Game</p>
          <FaSortDown className="xy-center" />
        </Button>
        <Button variant="red" className="d-inblock mx-1 xy-center">
          <FaCartPlus />
          <p className="f-poppins m-0">Market Place</p>
        </Button>
      </div>
      <div className="d-none d-md-flex align-items-center">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" className="xy-center f-poppins">
            R$ 0.00
          </Button>
          <Button variant="secondary" className="xy-center f-poppins">
            <FaWallet></FaWallet>&nbsp;Wallet
          </Button>
        </ButtonGroup>
      </div>
      <div className="d-none d-md-flex align-items-center mx-2">
        <div className="mx-2">
          <p className="mb-1 f-poppins">Fugusion 1</p>
          <ProgressBar
            id="top-progress"
            variant="red"
            now={60}
            className="w-100 bd-rounded-12 bg-red"
          />
        </div>
        <div>
          <img className="bd-rounded-50" width={"70px"} src={Avatar} alt="" />
          <FaSortDown />
          <FaRegBell className="mx-3" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
