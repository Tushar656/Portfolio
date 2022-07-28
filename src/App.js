import "./App.scss"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Topbar from "./components/topbar/Topbar";
import AOS from "aos"
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;



// git remote add origin https://github.com/Tushar656/Portfolio.git
// git branch -M main
// git push -u origin main


// > portfolio@0.1.0 deploy C:\Users\tushar\Documents\Programming\Web Developmenr\Webs\7_Portfoliyo Web\portfolio
// > gh-pages -d build



// git fetch
// git checkout gh-pages
