import React from "react";
import Header from "../../components/header/_index";
import Hero from "../../components/Hero";
import headerImg from "../../assets/header.png"

// sections
import MissionSection from "./MissionSection";
import ImpactSection from "./ImpactSection";
import WeDoSection from "./WeDoSection";
import LatestSection from "./LatestSection";

function Home() {
  return (
    <>
      <Header>
        <Hero img={headerImg} pageTitle="Technology For An Inclusive World" />
      </Header>
      <main id="main">
   
      <MissionSection />
      <ImpactSection />
      <WeDoSection />
      <LatestSection />
     
      </main>
    </>
  );
}

export default Home;
