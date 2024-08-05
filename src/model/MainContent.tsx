import React from "react";

interface MainContentProps {
  show: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ show }) => (
  <div
    className={`h-[75vh] relative flex items-center justify-center ${
      show ? "blur" : ""
    }`}
  >
    <div className="h-[50vh] w-[40vw] flex flex-col gap-4 justify-center  text-white">
      <div className="flex justify-center items-center  font-bold text-[40px]">
        Empowering The Future
      </div>
      <h1 className="font-bold flex justify-center text-[40px]">
        of Innovation
      </h1>
      <div className="flex justify-center">
        <button className="bg-red-600 p-3 text-white font-semibold">
          Learn more
        </button>
      </div>
    </div>
  </div>
);

export default MainContent;
