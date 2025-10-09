import { useEffect, useRef } from "react";
import "../css/navbar.css"

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

export default function Navbar({ offcanvasOpen, toggleOffcanvas, closeOffcanvas }) {
  const mobileMenuRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        offcanvasOpen
      ) {
        closeOffcanvas?.();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [offcanvasOpen, closeOffcanvas]);

  useEffect(() => {
    if (!burgerRef.current) return;
    burgerRef.current.classList.toggle("open", offcanvasOpen);
  }, [offcanvasOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".unslate_co--site-nav");
      if (window.scrollY > 0) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* Burger (visible on mobile) */}
          <div
            ref={burgerRef}
            className="burger-toggle-menu"
            onClick={toggleOffcanvas}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Nav ===== */}
      <div
        ref={mobileMenuRef}
        className={`unslate_co--site-mobile-menu ${
          offcanvasOpen ? "offcanvas" : ""
        }`}
      >
        <div className="close-wrap text-right">
          <a onClick={closeOffcanvas} className="cursor-pointer">
            <span className="close-label">Close</span>
            <span className="close-times">
              <span className="bar1"></span>
              <span className="bar2"></span>
            </span>
          </a>
        </div>
        <ul className="site-nav-ul-none-onepage mt-4">
          {[...leftNav, ...rightNav].map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeOffcanvas}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
