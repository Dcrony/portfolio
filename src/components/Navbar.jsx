import { useEffect, useRef, useState } from "react";
import "../css/navbar.css";

const leftNav = [
  { href: "#home-section", label: "Home" },
  { href: "#portfolio-section", label: "Portfolio" },
  { href: "#about-section", label: "About" },
  { href: "#services-section", label: "Services" },
];

const rightNav = [
  { href: "#skills-section", label: "Skills" },
  { href: "#testimonial-section", label: "Testimonials" },
  { href: "#journal-section", label: "Journal" },
  { href: "#contact-section", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const burgerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".unslate_co--site-nav");
      if (window.scrollY > 0) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle burger animation
  useEffect(() => {
    if (burgerRef.current) {
      burgerRef.current.classList.toggle("open", menuOpen);
    }
  }, [menuOpen]);

  return (
    <>
      {/* ===== Desktop Nav ===== */}
      <nav className="unslate_co--site-nav">
        <div className="container">
          {/* Left Menu */}
          <ul className="site-nav-ul left-menu">
            {leftNav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <a href="#home-section" className="unslate_co--site-logo">
            Dcrony<span>.</span>
          </a>

          {/* Right Menu */}
          <ul className="site-nav-ul right-menu">
            {rightNav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Burger Toggle */}
          <div
            ref={burgerRef}
            className="burger-toggle-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Menu ===== */}
      <div
        ref={mobileMenuRef}
        className={`unslate_co--site-mobile-menu ${menuOpen ? "active" : ""}`}
      >
        <div className="close-wrap text-right">
          <a onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <span className="close-label">Close</span>
            <span className="close-times">
              <span className="bar1"></span>
              <span className="bar2"></span>
            </span>
          </a>
        </div>

        <ul className="site-nav-ul-none-onepage">
          {[...leftNav, ...rightNav].map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
