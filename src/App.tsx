import "./index.css";
import Wave from "./components/include/Wave";
import Nav from "./components/common/Nav";
import Main from "./components/layout/Main";
import About from "./components/layout/About";
import Tech from "./components/layout/Tech";
import Service from "./components/layout/Service";
import Solution from "./components/layout/Solution";
import Team from "./components/layout/Team";
import History from "./components/layout/History";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import { useRef, useState } from "react";

function App() {
  const aboutContainerRef = useRef(null);
  const techContainerRef = useRef(null);
  const serviceContainerRef = useRef(null);
  const teamContainerRef = useRef(null);
  return (
    <div className="App scrollbar bg-white overflow-x-hidden overflow-y-scroll flex flex-col items-center relative">
      <Wave></Wave>
      <Nav
        dark={true}
        aboutContainerRef={aboutContainerRef}
        techContainerRef={techContainerRef}
        serviceContainerRef={serviceContainerRef}
        teamContainerRef={teamContainerRef}
      ></Nav>
      <Main></Main>
      <About aboutContainerRef={aboutContainerRef}></About>
      <Tech techContainerRef={techContainerRef}></Tech>
      <Service serviceContainerRef={serviceContainerRef}></Service>
      <Solution></Solution>
      <Team teamContainerRef={teamContainerRef}></Team>
      <History></History>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
