import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { loginRequest } from "../configuration/AuthConfig";
import { callMyGraph } from "../configuration/graphProfile";
import { ProfileData } from "./ProfileData";

export const ProfileContents: React.FC = () => {
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

  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState<GraphData | null>(null);

  console.log("Accounts:", accounts);

  const RequestProfileInfo = async () => {
    try {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      });

      const data = await callMyGraph(response.accessToken);
      setGraphData(data as GraphData);
    } catch (error) {
      console.error("Error acquiring token or calling API:", error);
      setGraphData(null);
    }
  };

  const handleBack = () => {
    setGraphData(null); // Reset to the initial state
  };

  return (
    <div className="p-6 bg-white/70 ml-[200px] rounded-lg flex flex-col absolute w-[300px] shadow-md">
      <h5 className="text-xl font-bold mb-4">Welcome {accounts[0].name}</h5>
      <br />
      {graphData ? (
        <div>
          <ProfileData graphData={graphData} />
          <button
            className="bg-gray-500 text-white cursor-pointer py-2 px-4 rounded hover:bg-gray-700 mt-4 w-full"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      ) : (
        <button
          className="bg-gray-500 text-white cursor-pointer py-2 px-4 rounded hover:bg-gray-700 w-full"
          onClick={RequestProfileInfo}
        >
          Request Profile Information
        </button>
      )}
    </div>
  );
};
