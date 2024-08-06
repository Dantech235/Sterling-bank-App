import React, { useState } from "react";
import Header from "./model/Header";
import MainContent from "./model/MainContent";
import Footer from "./model/Footer";
// import ChatModal from "./model/ChatModal";
import bgImage from "../src/assets/bgImage.jpeg";
import Modal from "./model/Modal";

const App: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header show={show} />
      <MainContent show={show} />
      <Footer handleClick={handleClick} show={show} />
      {show && <Modal show={show} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
