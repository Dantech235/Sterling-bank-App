import React from "react";
import Sterlinglogo from "../assets/svg-files/Sterling-Logo.svg";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./utils/SignOutButton";
import { SignInButton } from "./utils/SignInButton";

const SignInPage: React.FC = () => {
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

      {/* Welcome Container */}
      <div className="bg-white/80 rounded-lg shadow-lg flex flex-col justify-center items-center p-8 w-full max-w-md mt-20 md:mt-28 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome!</h2>

        <p className="text-gray-600 text-lg mb-8">
          We're glad to have you here. Click the button below to{" "}
          {isAuthenticated ? "sign out" : "sign in"} and access all the
          services.
        </p>

        <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
