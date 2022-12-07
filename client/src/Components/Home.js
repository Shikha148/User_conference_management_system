import React from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Intro from "./Intro";
import Events from "./Events";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Events />
      <Footer />
    </>
  );
};

export default Home;
