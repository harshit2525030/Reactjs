import React, { useState } from "react";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection.jsx";
import { homeObjOne } from "./InfoSection.jsx/Data";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default HomePage;
