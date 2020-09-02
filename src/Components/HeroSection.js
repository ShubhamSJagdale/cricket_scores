import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DataSourceContext from "../Contexts/DataSourceContext";
import { server_url, test_data } from "../Webapp";

const HeroSection = ({ avg_score }) => {
  //States
  const [countryName, setCountryName] = useState("");
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState("");
  //Context
  const [sourceOfData] = useContext(DataSourceContext);

  const handleChange = (e) => {
    setCountryName(e.target.value);
    setScore(0);
  };

  const avgScore = (e) => {
    // response
    if (response && sourceOfData === "server") {
      console.log(response);
      response.data.map((j) => (j[0] === countryName ? setScore(j[1]) : ""));
    } else if (response && sourceOfData === "test") {
      for (let item of response) {
        // eslint-disable-next-line no-unused-expressions
        item[1]["country"] === countryName ? setScore(item[1]["score"]) : "";
      }
    } else {
    }
  };

  useEffect(() => {
    if (countryName !== "" && sourceOfData === "server") {
      axios
        .get("http://www2.rsphinx.com/static/misc/cric_scores.json")
        .then((res) => setResponse(res))
        .then(avgScore());
    } else if (countryName !== "" && sourceOfData === "test") {
      setResponse(Object.entries(test_data));
      avgScore();
    } else {
      setResponse("");
      setScore("");
    }
  }, [countryName]);

  return (
    <>
      <div className="row">
        <div className="country">
          <form>
            The Country:
            <input
              className="country-input"
              onChange={handleChange}
              type="text"
              value={countryName}
            />
          </form>
        </div>
        <div className="average">The Average:{score}</div>
        <div className="horiz-bar" style={{ width: `${score * 2}px` }}>
          &nbsp;
        </div>
      </div>
    </>
  );
};

export default HeroSection;
