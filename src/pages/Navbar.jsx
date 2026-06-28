import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Github, Award, FileText, BookOpen } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Text links — primary navigation, kept as words
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Services", to: "/services" },
    { name: "Experience", to: "/experience" },
  ];

  // Icon-only links — secondary navigation, saves horizontal space in the pill
  const iconLinks = [
    { name: "Case Studies", to: "/case-studies", icon: BookOpen },
    { name: "Achievements", to: "/achievements", icon: Award },
    { name: "GitHub", to: "/github", icon: Github },
    { name: "Resume", to: "/resume", icon: FileText },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.nav-container')) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`navbar ${sticky ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          Dcrony<span>.</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="nav-icon-links">
          {iconLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  aria-label={link.name}
                  title={link.name}
                >
                  <Icon size={18} strokeWidth={2} />
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Link to="/contact" className="nav-contact">Contact</Link>
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)} />
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile menu keeps full text labels for every link — no space
            constraint here, so icon-only doesn't apply */}
        <ul className="mobile-nav-links">
          {[...navLinks, ...iconLinks].map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon && <link.icon size={18} strokeWidth={2} />}
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <Link to="/contact" className="mobile-contact-btn" onClick={() => setMobileMenuOpen(false)}>
            Get In Touch
          </Link>
          <div className="mobile-social-links">
            <a href="https://github.com/Dcrony" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} strokeWidth={2} />
            </a>
            <a href="https://x.com/codewithdcrony" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.2 8.2L23 22h-6.6l-5.2-6.8L5 22H1.9l7.7-8.8L1 2h6.7l4.7 6.2L18.9 2Zm-2.3 18h1.8L7.5 4H5.6l11 16Z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;