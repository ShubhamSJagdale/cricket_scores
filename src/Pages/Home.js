import React, { useState } from "react";
//Import Context
import DataSourceContext from "../Contexts/DataSourceContext";
//Importing Compoents
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  const [sourceOfData, setSourceOfData] = useState("test");

  return (
    <DataSourceContext.Provider value={[sourceOfData, setSourceOfData]}>
      <Header />
      <HeroSection />
    </DataSourceContext.Provider>
  );
};

export default Home;
