import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <img 
        src="/Copilot_20260302_075653.png" 
        alt="Astryx Logo" 
        className={`site-logo ${isScrolled ? 'scrolled' : ''}`}
      />
      
      {/* Hamburger Menu */}
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

     
      {isMenuOpen && (
        <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      )}

  <nav className={`nav-bar ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
    <ul>
      <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
      <li><NavLink to="/behind-the-scenes" onClick={closeMenu}>Behind The Scenes</NavLink></li>
      <li><NavLink to="/our-work" onClick={closeMenu}>Our Work</NavLink></li>
      <li><NavLink to="/contact-us" onClick={closeMenu}>Contact Us</NavLink></li>
    </ul>
  </nav>


    </>
  );
}

export default Navigation;