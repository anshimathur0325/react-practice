import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        
        <p>
          hello world
        </p>
        
      </header>
    </div>
  );*/
  <main className="text-gray-499 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Contact />
    <Projects />
    <Skills />
    <Testimonials />
  </main>
  );
}

export default App;
