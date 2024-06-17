import { ReactElement } from "react";
import Logo from "../assets/Logo.svg";
import Rbxheat from "../assets/Rbxheat.svg";

function Sidebar({ children }: { children: ReactElement }) {
  return (
    <div className="navbar bg-0A1428 flex flex-column  sidebar p-0">
      <div className="mx-5 my-4">
        <img src={Logo} alt="" />
        <img src={Rbxheat} alt="" />
      </div>
      <div className="flex-grow-1 bg-0D1830 w-100 h-auto">{children}</div>
    </div>
  );
}

export default Sidebar;
