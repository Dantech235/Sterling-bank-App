// Importing the graphConfig from the authConfig file
import { graphConfig } from "./AuthConfig";

// Defining an interface for the user information returned by MS Graph API
interface UserInfo {
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

// Defining the type for the callMsGraph function's parameter
export async function callMsGraph(
  accessToken: string
): Promise<UserInfo | undefined> {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(graphConfig.graphMeEndpoint, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: UserInfo = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
