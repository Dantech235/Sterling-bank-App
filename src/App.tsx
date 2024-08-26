import React, { createContext, useState, ReactNode } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
// import ChatModal from "./model/ChatModal";
import bgImage from "../src/assets/jpeg files/bgImage.jpeg";
import Modal from "./components/Modal";
// import { callMsGraph } from "./configuration/graph";
// import { loginRequest } from "./configuration/AuthConfig";
// import {
//   // AuthenticatedTemplate,
//   // UnauthenticatedTemplate,
//   useMsal,
// } from "@azure/msal-react";
// import { ProfileData } from "./components/ProfileData";
import { ProfileContents } from "./components/ProfileContents";
// import SignInPage from "./components/SignInPage";

interface AppContextType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
  handleCloseModal: () => void;
}

// Create the context with a default value
export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <AppContext.Provider
      value={{ show, setShow, handleClick, handleCloseModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

const App: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <AppProvider value={{ show, setShow, handleClick, handleCloseModal }}>
        <Header show={show} />

        <ProfileContents />

        <MainContent show={show} />

        <Footer handleClick={handleClick} show={show} />
        {show && <Modal show={show} onClose={handleCloseModal} />}
      </AppProvider>
    </div>
  );
};

export default App;
