import './App.css';
import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import MoreAbout from './components/MoreAbout';
import Experience from './components/About copy';
function App() {
  return (
    
  <main className="text-gray-499 bg-gray-900 body-font">

    <Navbar />
    <About />

    <MoreAbout />
    <Contact />
    <Projects />
    
    <Experience />
    
    
    <Footer />

  </main>
  );
}

export default App;
