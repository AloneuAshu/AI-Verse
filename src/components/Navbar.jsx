import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'chapter3', 'gallery', 'pricing', 'tech', 'contact'];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Chapter III', href: '#chapter3', id: 'chapter3' },
    { name: 'AI Tech', href: '#tech', id: 'tech' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 240, 255, 0.2)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* Logo */}
          <a href="#home" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            textDecoration: 'none'
          }}>
            <img
              src={logo}
              alt="AI Verse Studios"
              style={{
                height: '50px',
                width: '50px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2px solid var(--cyan)'
              }}
            />
            <span style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.25rem',
              fontWeight: '700',
              color: 'var(--cyan)',
              letterSpacing: '0.1em'
            }}>
              AI VERSE STUDIOS
            </span>
          </a>

          {/* Desktop Menu */}
          <div style={{
            display: 'none',
            gap: '2rem',
            alignItems: 'center'
          }} className="desktop-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: activeSection === link.id ? 'var(--cyan)' : 'var(--text-gray)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '0.5rem 0'
                }}
              >
                {link.name}
                {activeSection === link.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'var(--cyan)',
                    boxShadow: '0 0 10px var(--cyan-glow)'
                  }} />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--cyan)',
              cursor: 'pointer',
              display: 'block'
            }}
            className="mobile-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            padding: '1rem 0',
            borderTop: '1px solid rgba(0, 240, 255, 0.2)'
          }} className="mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '1rem 0',
                  color: activeSection === link.id ? 'var(--cyan)' : 'var(--text-gray)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  borderLeft: activeSection === link.id ? '2px solid var(--cyan)' : 'none',
                  paddingLeft: activeSection === link.id ? '1rem' : '0',
                  transition: 'all 0.3s ease'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
