import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="geometric-bg">
        <div className="wireframe wireframe-1"></div>
        <div className="wireframe wireframe-2"></div>
        <div className="wireframe wireframe-3"></div>
        <div className="wireframe wireframe-4"></div>
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="particle"></span>
          ))}
        </div>
      </div>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <div className="dev-tools-hint">
        <span className="terminal-icon">&gt;_</span>
        <span>Dev tools detected. Press F12 for secrets...</span>
      </div>
      <div className="search-hint">
        <span className="cmd-icon">⌘</span>
        <span>Press ⌘K to search</span>
      </div>
      <a href="#contact" className="chat-bubble">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;