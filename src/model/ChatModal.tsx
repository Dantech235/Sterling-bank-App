import React, { useState } from "react";
import SterlingLogo from "../assets/sterlingLogo.svg";
import OptionsIcon from "../assets/optionsIcon.svg";
import attachFileIcon from "../assets/attach-fileIcon.svg";
import sendIcon from "../assets/sendIcon.svg";
import wave from "../assets/wave.svg";

const ChatModal: React.FC = () => {
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
    <div className="absolute top-0 justify-end z-[100] flex pr-[50px] mt-8 h-[90vh] w-[100vw]">
      <div className="w-[26vw] h-[80vh] rounded-lg flex flex-col z-40 bg-white">
        <div className="w-[26vw] h-[10vh] rounded-lg flex pl-2 pr-2 justify-between items-center text-black">
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
        <div className="h-[70vh] flex flex-col justify-end rounded">
          <div></div>
          <hr className="bg-black w-full" />
          <div className="h-[50px] flex justify-center items-center gap-1">
            <button onClick={handleClickFile}>
              <img
                src={attachFileIcon}
                className="file-icon mr-3 cursor-pointer"
                id="fileIcon"
                alt="Attach File Icon"
              />
            </button>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <input
              placeholder="Type your message"
              className="w-[250px] outline-none h-[40px]"
            />
            <button className="h-[40px] p-1 rounded text-white">
              <img src={sendIcon} className="text-red-300" alt="Send Icon" />
            </button>
          </div>
          <footer className="rounded flex items-center justify-center p-2 text-blue-300 text-[14px]">
            Powered by infinion technologies
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
