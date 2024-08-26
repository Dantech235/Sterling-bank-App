import React, { ReactNode } from "react";
import Sterlinglogo from "../assets/svg-files/Sterling-Logo.svg";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./utils/SignOutButton";
import { SignInButton } from "./utils/SignInButton";

interface HeaderProps {
  children: ReactNode;
}

const SignInPage: React.FC<HeaderProps> = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen">
      {/* Header Section */}
      <div className="w-full fixed top-0 flex justify-between items-center p-5 bg-opacity-50 backdrop-filter backdrop-blur-lg z-10">
        <img src={Sterlinglogo} className="h-16 w-16" alt="Sterling Logo" />

        <div className="flex space-x-4">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>

      {/* Login Container */}
      <div className="bg-white/80 rounded-lg shadow-lg flex flex-col justify-center items-center p-8 w-full max-w-md mt-20 md:mt-28">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>

        <p className="text-gray-600 text-center mb-8">
          Welcome to the Private Area. Please enter your credentials to proceed
          and access all services.
        </p>

        <form className="flex flex-col w-full space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              required
            />
          </div>

          <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
