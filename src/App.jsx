import React, { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react'
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chapter3 from './components/Chapter3';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import AITech from './components/AITech';
import { Mail, Send, MessageSquare } from 'lucide-react';
import logo from './assets/logo.jpg';
import AITerminal from './components/AITerminal';

import RevealSection from './components/RevealSection';
import FloatingHolograms from './components/FloatingHolograms';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Correct DOM order: Home -> Chapter 3 -> AI Tech -> Gallery -> Pricing -> Contact
    const sections = ['home', 'chapter3', 'tech', 'gallery', 'pricing', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2.5; // Trigger point

      // Find the current active section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Throttle slightly for performance but keep responsive
    let timeoutId = null;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 50); // 50ms check
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ReactLenis root>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <div className="digital-noise" />
          <CustomCursor />
          {/* Subtle Starfield */}
          <Starfield />

          {/* 3D Floating Holograms */}
          <FloatingHolograms />

          {/* Navigation */}
          <Navbar activeSection={activeSection} />

          {/* AI System Terminal Overlay */}
          <AITerminal activeSection={activeSection} />



          {/* Main Content */}
          <main style={{ position: 'relative', zIndex: 1 }}>
            <Hero />

            <RevealSection>
              <Chapter3 />
            </RevealSection>

            <RevealSection>
              <AITech />
            </RevealSection>

            <RevealSection>
              <Gallery />
            </RevealSection>

            <RevealSection>
              <Pricing />
            </RevealSection>

            <RevealSection>
              <section id="contact" style={{ padding: '8rem 0', background: 'rgba(0, 240, 255, 0.02)' }}>
                <div className="container">
                  {/* Header */}
                  <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{
                      fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                      fontFamily: 'Orbitron, sans-serif',
                      fontWeight: '900',
                      marginBottom: '1.5rem',
                      color: 'var(--cyan)',
                      textShadow: '0 0 30px var(--cyan-glow)'
                    }}>
                      LET'S CREATE TOGETHER
                    </h2>
                    <p style={{
                      fontSize: '1.25rem',
                      color: 'var(--text-gray)',
                      maxWidth: '700px',
                      margin: '0 auto'
                    }}>
                      Ready to bring your vision to life with AI-powered cinema?
                    </p>
                  </div>

                  {/* Main Contact Card */}
                  <div style={{
                    maxWidth: '900px',
                    margin: '0 auto'
                  }}>
                    <div className="card" style={{
                      padding: '4rem',
                      textAlign: 'center',
                      background: 'rgba(0, 0, 0, 0.8)'
                    }}>
                      {/* Icon */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px',
                        border: '2px solid var(--cyan)',
                        borderRadius: '50%',
                        color: 'var(--cyan)',
                        marginBottom: '2rem',
                        background: 'rgba(0, 240, 255, 0.05)'
                      }}>
                        <Mail size={40} />
                      </div>

                      {/* Title */}
                      <h3 style={{
                        fontSize: '2rem',
                        fontFamily: 'Orbitron, sans-serif',
                        marginBottom: '1rem',
                        color: 'var(--text-white)'
                      }}>
                        GET IN TOUCH
                      </h3>

                      {/* Description */}
                      <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-gray)',
                        marginBottom: '2.5rem',
                        lineHeight: '1.7'
                      }}>
                        Whether you have a project in mind, want to collaborate, or just want to learn more about our AI-powered production process, we'd love to hear from you.
                      </p>

                      {/* Email */}
                      <div style={{
                        marginBottom: '2.5rem',
                        padding: '1.5rem',
                        background: 'rgba(0, 240, 255, 0.05)',
                        border: '1px solid rgba(0, 240, 255, 0.2)'
                      }}>
                        <div style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-gray)',
                          marginBottom: '0.5rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em'
                        }}>
                          Email Us At
                        </div>
                        <a href="mailto:contact@aiversestudios.com" style={{
                          fontSize: 'clamp(1rem, 5vw, 1.5rem)',
                          color: 'var(--cyan)',
                          textDecoration: 'none',
                          fontFamily: 'Orbitron, sans-serif',
                          fontWeight: '600',
                          wordBreak: 'break-all'
                        }}>
                          contact@aiversestudios.com
                        </a>
                      </div>

                      {/* CTA Button */}
                      <a href="mailto:contact@aiversestudios.com" className="btn" style={{
                        fontSize: '1rem',
                        padding: '1.25rem 3rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <Send size={20} />
                        SEND MESSAGE
                      </a>

                      {/* Response Time */}
                      <div style={{
                        marginTop: '3rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(0, 240, 255, 0.2)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: 'var(--text-gray)',
                        fontSize: '0.875rem'
                      }}>
                        <MessageSquare size={18} style={{ color: 'var(--cyan)' }} />
                        <span>We typically respond within 24 hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div style={{
                    textAlign: 'center',
                    marginTop: '4rem'
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-gray)'
                    }}>
                      Based in the Digital Realm • Available Worldwide
                    </p>
                  </div>
                </div>
              </section>
            </RevealSection>

            {/* Footer */}
            <footer style={{
              position: 'relative',
              zIndex: 10,
              background: 'var(--bg-black)',
              borderTop: '1px solid rgba(0, 240, 255, 0.2)',
              padding: '3rem 0',
              textAlign: 'center'
            }}>
              <div className="container">
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <img
                    src={logo}
                    alt="AI Verse Studios"
                    style={{
                      height: '40px',
                      width: '40px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      border: '2px solid var(--cyan)'
                    }}
                  />
                  <span style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: 'var(--cyan)',
                    letterSpacing: '0.1em'
                  }}>
                    AI VERSE STUDIOS
                  </span>
                </div>

                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-gray)',
                  marginBottom: '0.5rem'
                }}>
                  © 2026 AI VERSE STUDIOS. ALL RIGHTS RESERVED.
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-gray)'
                }}>
                  Engineering Legendary Realities Through Artificial Intelligence
                </p>
              </div>
            </footer>
          </main>
        </div>
      )}
    </ReactLenis>
  );
}

export default App;
