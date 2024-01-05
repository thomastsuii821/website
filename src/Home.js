import React from "react";
import Title from "./Title";

function Home() {
  return (
    <>
      <div className="section1" id="home">
        <div className="page">
          <Title></Title>
        </div>
        <a className="arrowLink" href="#about">
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </>
  );
}

export default Home;
