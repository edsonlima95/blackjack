import Logo from "../assets/Logo.svg";
import Rbxheat from "../assets/Rbxheat.svg";

function Sidebar() {
  return (
    <div className="mx-5 my-4">
      <img src={Logo} alt="" />
      <img src={Rbxheat} alt="" />
    </div>
  );
}

export default Sidebar;
