import './App.css';
import React, { useRef, useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import MoreAbout from './components/MoreAbout';
import Experience from './components/About copy';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function App() {
  const moreAboutRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Ensure high DPI support

    // Store current canvasRef in a variable
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      canvasElement.appendChild(renderer.domElement);
    } else {
      console.error('Canvas element not found.');
    }

    // Create and add a rotating cube
    const cubeGeometry = new THREE.TorusKnotGeometry( 5, 1, 100, 16 ); // Radius, tube radius, radial segments, tubular segments

    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Set up camera position
    camera.position.z = 5;

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', onResize);
      if (canvasElement) {
        canvasElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Function to scroll to MoreAbout section
  const scrollToMoreAbout = () => {
    if (moreAboutRef.current) {
      moreAboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
      <Navbar />
      <About scrollToMoreAbout={scrollToMoreAbout} />
      <br></br>
      <br></br>
      <MoreAbout ref={moreAboutRef} />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
