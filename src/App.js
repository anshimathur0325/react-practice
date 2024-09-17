import './App.css';
import React, { useRef, useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import MoreAbout from './components/MoreAbout';
import Skills from './components/Skills';
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

    // Create and add a blue torus knot geometry
    const geometry = new THREE.TorusKnotGeometry(5, 1, 100, 16); // Radius, tube radius, radial segments, tubular segments
    const blueMaterial = new THREE.MeshBasicMaterial({ color: '#0000FF', transparent: true,
    opacity: 0.8 }); // Blue color material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: '#61dafb',
      wireframe: true,// 50% transparent
    });
       
    // Create the blue mesh and the wireframe
    const blueMesh = new THREE.Mesh(geometry, blueMaterial); // Blue object
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial); // Wireframe overlay

    // Add both to the scene
    scene.add(blueMesh);
    scene.add(wireframeMesh);

    // Set up camera position
    camera.position.z = 5;

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false; // Disable rotation
    controls.enableZoom = false; // Disable zoom
    controls.enablePan = false; // Disable panning
    controls.enabled = false; // Completely disable controls if not needed

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      blueMesh.rotation.x += 0.001; // Slow down the rotation speed
      blueMesh.rotation.y += 0.001;
      wireframeMesh.rotation.x += 0.001; // Rotate the wireframe at the same speed
      wireframeMesh.rotation.y += 0.001;
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
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
