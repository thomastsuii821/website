import "./App.css";
import Title from "./Title.js";
import HeaderBar from "./headerBar.js";
import About from "./about.js";
import Project from "./Project.js";

function App() {
  return (
    <>
      <div className="section1" id="home">
        <div className="topBar">
          <HeaderBar></HeaderBar>
        </div>
        <div className="page">
          <Title></Title>
        </div>
        <a href="#about">
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      <div className="section2">
        <About></About>
      </div>
      <div className="section3">
        <Project></Project>
      </div>
    </>
  );
}

export default App;
