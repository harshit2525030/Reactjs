import React, { useState } from "react";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UserList from "./UserList";

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
      <UserList />
    </>
  );
}

export default HomePage;
