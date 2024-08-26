import React from "react";

interface ProfileDataProps {
  graphData: {
    givenName: string;
    surname: string;
    userPrincipalName: string;
    id: string;
    profileImage?: string; // Added to hold the user's profile image
  };
}

export const ProfileData: React.FC<ProfileDataProps> = ({ graphData }) => {
  return (
    <div id="profile-div" className="flex flex-col items-center space-y-4">
      {graphData.profileImage && (
        <img
          src={graphData.profileImage}
          alt={`${graphData.givenName} ${graphData.surname}`}
          className="rounded-full w-24 h-24 mb-4"
        />
      )}
      <p>
        <strong>First Name: </strong> {graphData.givenName}
      </p>
      <p>
        <strong>Last Name: </strong> {graphData.surname}
      </p>
      <p>
        <strong>Email: </strong> {graphData.userPrincipalName}
      </p>
      {/* <p>
        <strong>Id: </strong> {graphData.id}
      </p> */}
    </div>
  );
};
