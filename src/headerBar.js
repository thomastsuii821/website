import React from "react";

function HeaderBar() {
  return (
    <div className="bar">
      <a href="#home">
        <button className="barButton">Home</button>
      </a>
      <div className="divider"></div>
      <a href="#about">
        <button className="barButton">About</button>
      </a>
      <div className="divider"></div>
      <a>
        <button className="barButton">Projects</button>
      </a>
      <div className="divider"></div>
      <a>
        <button className="barButton">Contact</button>
      </a>
    </div>
  );
}

export default HeaderBar;
