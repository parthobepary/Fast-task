import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import OuerTeam from "./OuerTeam";

const Allhome = () => {
  return (
    <div>
      <Header>
        <Banner />
        <Home />
        <OuerTeam />
        <Footer />
      </Header>
    </div>
  );
};

export default Allhome;
