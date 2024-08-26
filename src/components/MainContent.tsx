import React from "react";

interface MainContentProps {
  show: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ show }) => {
  return (
    <div
      className={`h-[75vh] flex items-center justify-center ${
        show ? "blur-md" : ""
      }`}
    >
      <div className="flex flex-col gap-4 justify-center text-white p-4 sm:p-6 md:p-8 lg:w-[40vw] w-full">
        <div className="flex justify-center items-center font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
          Empowering The Future
        </div>
        <h1 className="font-bold flex justify-center text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
          of Innovation
        </h1>
        <div className="flex justify-center">
          <button className="bg-red-600 p-2 sm:p-3 text-white font-semibold text-[16px] sm:text-[18px] rounded transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
