import React from "react";
import "./Home.css";
import Header from "./Header";
import HeroSec from "./HeroSec";
import Features from "./Features";

function Home() {
  return (
    <div className="entire">
      <Header />
      <HeroSec />
      <Features />
    </div>
  );
}

export default Home;
