import { Nav, Navbar } from "react-bootstrap";
import {
  FaShieldVirus,
  FaLifeRing,
  FaTrophy,
  FaScroll,
  FaChartBar,
} from "react-icons/fa";

function Navigator() {
  return (
    <Navbar>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#lin" className="xy-center c-413E61">
            <FaShieldVirus />
            &nbsp;REDEEM CODE
          </Nav.Link>
          <Nav.Link href="#link" className="xy-center c-413E61">
            <FaLifeRing />
            &nbsp;LEADERBOARD
          </Nav.Link>
          <Nav.Link href="#affi" className="xy-center c-413E61">
            <FaScroll></FaScroll>
            &nbsp;AFFILIATES
          </Nav.Link>
          <Nav.Link href="#prov" className="xy-center c-413E61">
            <FaChartBar></FaChartBar>
            &nbsp;PROVABLY FAIR
          </Nav.Link>
          <Nav.Link href="#supp" className="xy-center c-413E61">
            <FaTrophy />
            &nbsp;SUPPORT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigator;
