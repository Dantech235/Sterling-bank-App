import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../configuration/AuthConfig";
import { Link } from "react-router-dom";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect.
 */

export const SignInButton: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType: "popup" | "redirect") => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };

  return (
    <div className="relative inline-block text-left ml-auto">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-[100px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Sign In
        </button>
      </div>

      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <Link to="/">
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleLogin("popup")}
            >
              Sign in using Popup
            </button>
          </Link>
          <Link to="/">
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleLogin("redirect")}
            >
              Sign in using Redirect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
