import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
// import ChatModal from "./model/ChatModal";
import bgImage from "../src/assets/jpeg files/bgImage.jpeg";
import Modal from "./components/Modal";
import { callMsGraph } from "./configuration/graph";
import { loginRequest } from "./configuration/AuthConfig";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { ProfileData } from "./components/ProfileData";

interface GraphData {
  id: string;
  displayName: string;
  givenName: string;
  surname: string;
  userPrincipalName: string;
  jobTitle?: string;
  mail?: string;
  mobilePhone?: string;
  officeLocation?: string;
}

export const ProfileContent: React.FC = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState<GraphData | null>(null);

  const RequestProfileData = async () => {
    try {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      });
      const data = await callMsGraph(response.accessToken);
      setGraphData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-white/70 ml-[200px] rounded-lg flex flex-col fixed z-1000 shadow-md">
      <h5 className="text-xl font-bold mb-4">Welcome {accounts[0].name}</h5>
      <br />
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
          onClick={RequestProfileData}
        >
          Request Profile Information
        </button>
      )}
    </div>
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
      <Header show={show} />
      <AuthenticatedTemplate>
        <ProfileContent />

        <MainContent show={show} />
      </AuthenticatedTemplate>
      <Footer handleClick={handleClick} show={show} />
      {show && <Modal show={show} onClose={handleCloseModal} />}

      <UnauthenticatedTemplate>
        <h5 className="text-white font-bold">
          <center>Please sign-in to see your profile information.</center>
        </h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default App;
