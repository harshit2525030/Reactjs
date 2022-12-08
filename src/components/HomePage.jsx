import React, { useState } from "react";
import HeroSection from "./03_HeroSection";
import InfoSection from "./04_InfoSection";
import Navbar from "./02_Navbar";
import Sidebar from "./01_Sidebar";
import UserList from "./05_UserList";
import Services from "./Services";

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
      <InfoSection />
      <Services />
      <UserList />
    </>
  );
}

export default HomePage;
