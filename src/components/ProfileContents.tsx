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
    <div className="p-6 bg-white/70 rounded-lg   max-sm:flex max-sm:flex-col max-sm:fixed  max-sm:right-0 max-sm:px-2 max-sm:mr-3   flex sm:flex-col fixed sm:top-5 z-[2000] shadow-lg w-[100%] max-w-[400px] md:max-w-[350px] max-sm:w-fit max-sm:h-fit lg:max-w-[300px] mx-auto  max-md:mt-20 right-[150px] ">
      <h5 className="sm:text-[20px] max-sm:text-[15px] font-bold text-gray-800 mb-4">
        Welcome {accounts[0].name}
      </h5>
      {graphData ? (
        <div>
          <ProfileData graphData={graphData} />
          <button
            className="bg-red-600 text-white cursor-pointer py-2 px-4 rounded hover:bg-red-700 mt-4 w-full transition-all duration-300"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      ) : (
        <button
          className="bg-red-600 text-white max-sm:w-full max-sm:py-2 max-sm:px-2 max-sm:h-12 max-sm:text-[10px] cursor-pointer sm:py-2 sm:px-4 rounded hover:bg-red-700 w-[100%] transition-all duration-300"
          onClick={RequestProfileInfo}
        >
          Request Profile Information
        </button>
      )}
    </div>
  );
};
