import "./App.css";
import About from "./about.js";
import Project from "./Project.js";
import Home from "./Home.js";
import HeaderBar from "./headerBar.js";

function App() {
  return (
    <>
      <section className="whole">
        <HeaderBar></HeaderBar>
        <Home></Home>
        <About></About>
        <Project></Project>
      </section>
    </>
  );
}

export default App;
