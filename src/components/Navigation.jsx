import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/Copilot_20260302_075653.png'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { passive: true });
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      <img 
        src={logo}
        alt="Astryx Logo" 
        className={`site-logo ${isScrolled ? 'scrolled' : ''}`}
      />
      
      {/* Hamburger Menu */}
      <button 
        type="button"
        className={`hamburger ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

  <nav id="primary-navigation" className={`nav-bar ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
    <ul>
      <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
      <li><NavLink to="/behind-the-scenes" onClick={closeMenu}>Behind The Scenes</NavLink></li>
      <li><NavLink to="/our-work" onClick={closeMenu}>Our Work</NavLink></li>
      <li><NavLink to="/about-us" onClick={closeMenu}>About Us</NavLink></li>
      <li><NavLink to="/contact-us" onClick={closeMenu}>Contact Us</NavLink></li>
    </ul>
  </nav>


    </>
  );
}

export default Navigation;