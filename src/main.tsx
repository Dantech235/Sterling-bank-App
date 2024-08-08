import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./configuration/AuthConfig.tsx";
// import { BrowserRouter as Router, Route} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage.tsx";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <MsalProvider instance={msalInstance}>
        <Routes>
          <Route
            path="/"
            element={
              <AuthenticatedTemplate>
                <App />
              </AuthenticatedTemplate>
            }
          />
          <Route
            path="/signIn"
            element={
              <UnauthenticatedTemplate>
                <SignInPage children />
              </UnauthenticatedTemplate>
            }
          />
        </Routes>
      </MsalProvider>
    </Router>
  </React.StrictMode>
);
