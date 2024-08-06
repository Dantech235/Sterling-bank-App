import React, { useState } from "react";
import SterlingLogo from "../assets/sterlingLogo.svg";
import OptionsIcon from "../assets/optionsIcon.svg";
// import attachFileIcon from "../assets/attach-fileIcon.svg";
// import sendIcon from "../assets/sendIcon.svg";
import wave from "../assets/wave.svg";
import ChatComponent from "./modalView";

interface ChatModalProps {
  show: boolean;
}

const ChatModal: React.FC<ChatModalProps> = ({ show }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
    if (file) {
      console.log("Selected file:", file.name);
    } else {
      console.log("No file selected");
    }
  };

  const handleClickFile = () => {
    document.getElementById("fileInput")?.click();
  };

  //   let fileInput = document.getElementById("fileInput");
  //   let fileIcon = document.getElementById("fileIcon");

  //   fileIcon.addEventListener("click", () => {
  //     fileInput.click();
  //   });

  return (
    <div
      className={`fixed bottom-0  justify-end  flex pr-[50px]  pt-2  mt-8 h-full w-[100vw]  ${
        show ? "" : ""
      }`}
    >
      <div className=" h-[80vh] rounded-lg flex flex-col fixed z-[1000]  mt-4 bg-white">
        <div className=" h-[10vh] gap-3 rounded-lg flex pl-2 pr-2 justify-between items-center text-black">
          <div>
            <img
              src={SterlingLogo}
              className="w-[40px] h-[40px]"
              alt="Sterling Logo"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-8">
              <h1>Welcome to SterlingBot</h1>
              <img src={wave} className="w-[25px] h-[25px]" alt="Wave" />
            </div>
            <div>
              <p className="text-[11px]">
                I'm here to answer all your financial questions
              </p>
            </div>
          </div>
          <img
            src={OptionsIcon}
            className="h-[30px] w-[30px]"
            alt="Options Icon"
          />
        </div>
        <hr className="bg-black w-full" />
        <ChatComponent
          token="bNk-pA022KQ.nwmz8OAfftifXruuPZF7bG1d4tsz7vcPNvktszvWySU"
          userID="Daniel"
        />
      </div>
    </div>
  );
};

export default ChatModal;
