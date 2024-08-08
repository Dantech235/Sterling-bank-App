import React from "react";
import arrowUp from "../assets/svg-files/arrowUp (2).svg";

interface FooterProps {
  handleClick: () => void;
  show: boolean;
}

const Footer: React.FC<FooterProps> = ({ handleClick, show }) => (
  <div className="fixed  bg-transparent z-[1000] ">
    <div className="bg-[transparent] h-[10vh] fixed bottom-0 right-0 z-[2000] flex justify-end items-center">
      <div id="toggleButton" onClick={handleClick}>
        <div className="bg-amber-400 h-[40px] w-[110px] p-1 flex justify-center items-center gap-2 mr-[50px] rounded ">
          <button>
            <p className="font-semibold text-white">Let's Chat</p>
          </button>
          <img
            src={arrowUp}
            className={`${
              show && "rotate-180"
            } transition-all duration-300 ease-in-out h-[12px] w-[12px] `}
            alt="Arrow"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
