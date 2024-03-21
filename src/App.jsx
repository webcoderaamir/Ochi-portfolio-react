import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ochi from "./components/Ochi";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-black bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Ochi />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
