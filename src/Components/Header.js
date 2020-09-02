import React, { useContext } from "react";
import DataSourceContext from "../Contexts/DataSourceContext";
import HeroSection from "./HeroSection";

const Header = () => {
  const [sourceOfData, setSourceOfData] = useContext(DataSourceContext);
  const handleOptionChange = (e) => {
    setSourceOfData(e.target.value);
  };
  return (
    <>
      <form>
        Source of data:
        <input
          id="src-test"
          type="radio"
          name="data-source"
          value="test"
          onChange={handleOptionChange}
          checked={sourceOfData === "test"}
        />
        <label htmlFor="src-local">Test Data</label>
        <input
          id="src-server"
          type="radio"
          name="data-source"
          value="server"
          onChange={handleOptionChange}
          checked={sourceOfData === "server"}
        />
        <label htmlFor="src-server">Server Data</label>
      </form>
    </>
  );
};

export default Header;
