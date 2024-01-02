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
    
  <main className="text-gray-499 bg-gray-900 body-font">

    <Navbar />
    <About />

    <MoreAbout />
    <Projects />

    <Experience />
    <Certificates />

    <Footer />

  </main>
  );
}

export default App;
