import React, { useState } from "react";
import Header from "./model/Header";
import MainContent from "./model/MainContent";
import Footer from "./model/Footer";
import ChatModal from "./model/ChatModal";
import bgImage from "../src/assets/bgImage.jpeg";

const App: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className="bg-blue flex flex-col min-h-screen  "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header show={show} />
      <MainContent show={show} />
      <Footer handleClick={handleClick} show={show} />
      {show && <ChatModal />}
    </div>
  );
};

export default App;
