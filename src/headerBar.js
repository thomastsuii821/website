import React from "react";

function HeaderBar() {
  return (
    <>
      <div className="wrapper">
        <ul className="bar">
          <li className="logo">THOMAS</li>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#project">PROJECTS</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
        <div className="divider bar"></div>
      </div>
    </>
  );
}

export default HeaderBar;
