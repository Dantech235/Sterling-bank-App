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
        <Link to="/">
          <button
            type="button"
            className="bg-red-800 hover:bg-blue-600 text-white py-2 px-4 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => handleLogout("popup")}
          >
            Sign Out
          </button>
        </Link>
      </div>

      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      ></div>
    </div>
  );
};
