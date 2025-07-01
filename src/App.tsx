import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Profile from './Asserts/ChatGPT Image Jul 1, 2025, 02_53_55 PM.png';
import calcImg from '../Asserts/calc.png';
import landImg from '../Asserts/land.png';
import ecommerceImg from '../Asserts/e-commerce.jpeg';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;