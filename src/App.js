import './App.css';
import React from "react";
import About from "./components/About"
import Certificates from "./components/Certificates"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import MoreAbout from './components/MoreAbout';
import Experience from './components/About copy';
function App() {
  return (
    
  <main>

    <Navbar />
    <br></br>
    <br></br>
    <br></br>
    <About />
    <br></br>
    <br></br>
    <MoreAbout />
    <Projects />

    <Experience />
    <Certificates />

    <Footer />

  </main>
  );
}

export default App;
