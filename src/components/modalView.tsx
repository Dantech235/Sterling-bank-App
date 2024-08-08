import React from "react";
import ReactWebChat from "botframework-webchat";
import { createDirectLine } from "botframework-webchat";

// Define props interface if needed
interface Props {
  token: string;
  userID: string;
}

const ChatComponent: React.FC<Props> = () => {
  return (
    <ReactWebChat
      directLine={createDirectLine({
        token: "bNk-pA022KQ.nwmz8OAfftifXruuPZF7bG1d4tsz7vcPNvktszvWySU",
      })}
    />
  );
};

export default ChatComponent;
