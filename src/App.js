import './App.css';
import React from "react";
import About from "./components/About"
import Certificates from "./components/Certificates"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import MoreAbout from './components/MoreAbout';
import Experience from './components/About copy';
import { useRef } from "react";

function App() {
  const moreAboutRef = useRef(null);

  // Function to scroll to MoreAbout section
  const scrollToMoreAbout = () => {
    if (moreAboutRef.current) {
      moreAboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    
  <main>

    <Navbar />
    <About scrollToMoreAbout={scrollToMoreAbout}/>
    <br></br>
    <br></br>
    <MoreAbout ref={moreAboutRef} />
    <Projects />

    <Experience />
    <Certificates />

    <Footer />

  </main>
  );
}

export default App;
