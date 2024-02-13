import React from "react";
import Footer from "../components/Footer/Footer";
import ResizableImages from "../components/ResizerSection/ResizeabeImage";
import BlurSection from "../components/BlurSection/BlurSection";
import TabSection from "../components/TabSection/TabSection";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Cliente from "../components/Cliente/Cliente";
import Features from "../components/Features/Features";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TabSection />
      <BlurSection />
      <ResizableImages />
      <Features />
      <Cliente />
      <Footer />
    </>
  );
};

export default Home;
