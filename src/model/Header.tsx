import React from "react";
import Sterlinglogo from "../assets/Sterling-Logo.svg";

interface HeaderProps {
  show: boolean;
}

const Header: React.FC<HeaderProps> = ({ show }) => (
  <div
    className={`h-[15vh]  flex items-center pl-[65px]  ${
      show ? "blur" : ""
    }`}
  >
    <img src={Sterlinglogo} className="h-[70px] w-[70px]" alt="Sterling Logo" />
  </div>
);

export default Header;
