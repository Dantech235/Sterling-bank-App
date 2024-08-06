import React, { useState } from "react";
import SterlingLogo from "../assets/sterlingLogo.svg";
import OptionsIcon from "../assets/optionsIcon.svg";
import wave from "../assets/wave.svg";
import ChatComponent from "./modalView";

interface ChatModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ChatModalProps> = ({ show, onClose }) => {
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

  return (
    <>
      {show && (
        <div className="fixed  w-[100vw] h-screen flex justify-end   items-center bottom-0 top-0 z-50 bg-black/70  ">
          {/* <div
            className="fixed inset-0 bg-red-200/50  backdrop-blur-md"
            onClick={onClose}
          ></div> */}
          <div className="relative   mr-[3.8%] rounded-lg w-[370px]   h-[80vh] flex flex-col z-50">
            <div className="flex justify-between bg-white rounded items-center p-4 border-b">
              <div className="flex items-center gap-3">
                <img
                  src={SterlingLogo}
                  className="w-[40px] h-[40px]"
                  alt="Sterling Logo"
                />
                <div>
                  <h1 className="text-lg font-bold">Welcome to SterlingBot</h1>
                  <p className="text-[10px] text-gray-600">
                    I'm here to answer all your financial questions
                  </p>
                </div>
                <img src={wave} className="w-[25px] h-[25px]" alt="Wave" />
              </div>
              <img
                src={OptionsIcon}
                className="h-[30px] w-[30px] cursor-pointer"
                alt="Options Icon"
                onClick={onClose}
              />
            </div>
            <ChatComponent
              token="bNk-pA022KQ.nwmz8OAfftifXruuPZF7bG1d4tsz7vcPNvktszvWySU"
              userID="Daniel"
            />
            <footer className="rounded bg-white flex items-center justify-center p-1 text-blue-300 text-[14px]">
              Powered by infinion technologies
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
