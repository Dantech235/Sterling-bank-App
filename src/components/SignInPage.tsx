import React, { ReactNode } from "react";
import Sterlinglogo from "../assets/svg-files/Sterling-Logo.svg";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./utils/SignOutButton";
import { SignInButton } from "./utils/SignInButton";

interface HeaderProps {
  children: ReactNode;
}

const SignInPage: React.FC<HeaderProps> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="flex flex-col justify-center items-center bg-slate-500   h-[100vh]">
      <div
        className={
          "h-[15vh] fixed top-0 flex justify-between items-center pl-[65px]"
        }
      >
        <div className="fixed top-0 left-0 pl-5 pt-5">
          <img
            src={Sterlinglogo}
            className="h-[70px] w-[70px]"
            alt="Sterling Logo"
          />
        </div>

        <div className="mr-[50px] fixed right-0 flex ">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
        {children}
      </div>

      <div className="bg-white/70 rounded flex justify-center items-center  h-[70%] w-[25%]">
        <div className="h-[95%] w-[95%] bg-black">
          <div className="bg-black text-blue-500 w-full h-[15%] flex justify-center items-center ">
            <p className="text-[30px] font-bold text-red-400">LOGIN</p>
          </div>

          <div className=" text-blue-500 h-[25%] font-semibold">
            <p className="bg-black text-blue-500 flex items-center justify-center">
              Welcome to the Private area
            </p>
            <p className="bg-black text-blue-500 flex items-center justify-center">
              Please provide credentials to proceed and
            </p>
            <p className="bg-black text-blue-500 flex items-center justify-center">
              get access to all services
            </p>
          </div>

          <form className="flex flex-col bg-slate-950 h-[60%] justify-between text-blue-500 ">
            <div className="flex flex-col h-[100px]">
              <label>
                <b>Email</b>
              </label>
              <input
                className="border border-solid border-black h-[50px]"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col ">
              <label>
                <b>Password</b>
              </label>
              <input
                className="border border-solid border-black h-[50px]"
                required
                type="password"
              />
            </div>

            <button className="bg-white">
              {isAuthenticated ? <SignOutButton /> : <SignInButton />}
            </button>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
