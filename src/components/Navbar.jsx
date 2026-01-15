import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Chapter III', href: '#chapter3' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'AI Tech', href: '#tech' },
    { name: 'Contact', href: '#contact' },
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
              src="/src/assets/logo.jpg"
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
                  color: 'var(--text-gray)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--cyan)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-gray)'}
              >
                {link.name}
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
                  color: 'var(--text-gray)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
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
