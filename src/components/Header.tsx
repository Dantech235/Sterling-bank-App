import React, { ReactNode } from "react";
import Sterlinglogo from "../assets/svg-files/Sterling-Logo.svg";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./utils/SignOutButton";
import { SignInButton } from "./utils/SignInButton";

interface HeaderProps {
  show: boolean;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ show, children }) => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div
      className={`h-[15vh]  flex justify-between items-center pl-[65px]  ${
        show ? "blur" : ""
      }`}
    >
      <img
        src={Sterlinglogo}
        className="h-[70px] w-[70px]"
        alt="Sterling Logo"
      />

      <div className="mr-[50px] ">
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </div>
      {children}
    </div>
  );
};

export default Header;
