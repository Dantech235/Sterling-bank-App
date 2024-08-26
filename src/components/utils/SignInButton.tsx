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
        <Link to="/account">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => handleLogin("popup")}
          >
            Sign In
          </button>
        </Link>
      </div>

      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {/* <div className="py-1" role="none">
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
        </div> */}
      </div>
    </div>
  );
};
