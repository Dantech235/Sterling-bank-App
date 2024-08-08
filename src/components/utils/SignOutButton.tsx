import React from "react";
import { useMsal } from "@azure/msal-react";
import { Link } from "react-router-dom";

/**
 * Renders a sign out button
 */
export const SignOutButton: React.FC = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType: "popup" | "redirect") => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  };

  return (
    <div className="relative inline-block text-left ml-auto">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Sign Out
        </button>
      </div>

      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <Link to="/signIn">
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleLogout("popup")}
            >
              Sign out using Popup
            </button>
          </Link>
          <Link to="/signIn">
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleLogout("redirect")}
            >
              Sign out using Redirect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
