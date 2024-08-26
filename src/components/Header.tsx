import React, { ReactNode } from "react";
import Sterlinglogo from "../assets/svg-files/Sterling-Logo.svg";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./utils/SignOutButton";
import { SignInButton } from "./utils/SignInButton";

interface HeaderProps {
  show: boolean;
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ show, children }) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <header
      className={`flex w-[100%] sm:justify-between max-sm:justify-between max-sm:border max-sm:border-solid  items-center max-sm:w-full max-sm:bg-blue-600 p-4 sm:p-6 md:p-8  text-white  ${
        show ? "blur-md" : ""
      }`}
    >
      <img
        src={Sterlinglogo}
        className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
        alt="Sterling Logo"
      />

      <div className="flex items-center space-x-4">
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </div>
      {children}
    </header>
  );
};

export default Header;
