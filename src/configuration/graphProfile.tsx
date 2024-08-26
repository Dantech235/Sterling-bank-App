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
  profileImage?: string; // Added to hold the user's profile image data
}

export async function callMyGraph(
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
    const userInfoResponse = await fetch(
      "https://graph.microsoft.com/v1.0/me",
      options
    );
    const userInfo = await userInfoResponse.json();

    const userImageResponse = await fetch(
      "https://graph.microsoft.com/v1.0/me/photo/$value",
      options
    );

    if (userImageResponse.ok) {
      const imageBlob = await userImageResponse.blob();
      const reader = new FileReader();
      const base64Image = await new Promise<string>((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(imageBlob);
      });

      userInfo.profileImage = base64Image;
    } else {
      console.warn("User does not have a profile image.");
    }

    return userInfo;
  } catch (error) {
    console.error("Error fetching data from Microsoft Graph API:", error);
    return undefined;
  }
}
