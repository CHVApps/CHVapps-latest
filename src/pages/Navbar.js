import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef();
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`} ref={navRef}>
      <div className="navbar-container">
        <div className="logo-container">
          <img src="/images/Logo1.webp" alt="Logo" className="logo" />
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}>About</Link>
          <Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }}>Services</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}>Contact</Link>
          <Link to="/internship" className={isActive('/internship') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/internship'); }}>Internship</Link>
          <div className="nav-dropdown" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
            <button className="nav-dropdown-btn">Get Courses</button>
            {coursesOpen && (
              <div className="nav-dropdown-menu">
                <Link to="/basics" onClick={() => handleLinkClick('/basics')}>Basics</Link>
                <Link to="/advanced" onClick={() => handleLinkClick('/advanced')}>Advanced</Link>
              </div>
            )}
          </div>
        </div>

        <div className="right-section">
          <div className="right-inner">
            <button className="get-started-button" onClick={() => handleLinkClick('/contact')}>Get Started</button>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="dot-grid">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="dot" />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
