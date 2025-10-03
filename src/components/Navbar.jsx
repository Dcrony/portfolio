import { useEffect, useRef } from "react";

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      const container = mobileMenuRef.current;
      if (!container) return;
      if (!container.contains(e.target) && offcanvasOpen) {
        if (typeof closeOffcanvas === "function") closeOffcanvas();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [offcanvasOpen, closeOffcanvas]);

  // Keep burger open class synced (useful for CSS animations)
  useEffect(() => {
    const burger = burgerRef.current;
    if (!burger) return;
    if (offcanvasOpen) burger.classList.add("open");
    else burger.classList.remove("open");
  }, [offcanvasOpen]);

  // Smooth scroll handler for anchor links
  const handleNavClick = (e, href) => {
    if (!href || !href.startsWith("#")) return;

    e.preventDefault();

    const targetEl = document.querySelector(href);
    if (targetEl) {
      if (typeof closeOffcanvas === "function") closeOffcanvas();

      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

      if (history && history.pushState) {
        history.pushState(null, null, href);
      } else {
        window.location.hash = href;
      }
    }
  };

  return (
    <>
      {/* Mobile offcanvas menu */}
      <nav
        className={`unslate_co--site-mobile-menu ${offcanvasOpen ? "open" : ""}`}
        ref={mobileMenuRef}
        aria-hidden={!offcanvasOpen}
      >
        <div className="close-wrap d-flex">
          <a
            href="#"
            className="d-flex ml-auto js-menu-toggle"
            onClick={(e) => {
              e.preventDefault();
              if (typeof toggleOffcanvas === "function") toggleOffcanvas();
            }}
            aria-label="Close menu"
          >
            <span className="close-label">Close</span>
            <div className="close-times">
              <span className="bar1"></span>
              <span className="bar2"></span>
            </div>
          </a>
        </div>

        {/* Mobile nav links */}
        <ul className="mobile-nav-list">
          {[...leftNav, ...rightNav].map((item) => (
            <li key={item.href} className="mobile-nav-item">
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main desktop nav */}
      <nav
        className="unslate_co--site-nav site-nav-target"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container">
          <div className="row align-items-center justify-content-between text-left">
            <div className="col-md-5 text-right">
              <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                {leftNav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="nav-link"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-logo pos-absolute">
              <a
                href="#home-section"
                className="unslate_co--site-logo"
                onClick={(e) => handleNavClick(e, "#home-section")}
              >
                Dcrony<span>.</span>
              </a>
            </div>

            <div className="col-md-5 text-right text-lg-left">
              <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                {rightNav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="nav-link"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* small-screen menu toggle */}
              <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                <li>
                  <a
                    href="#"
                    className="js-menu-toggle"
                    onClick={(e) => {
                      e.preventDefault();
                      if (typeof toggleOffcanvas === "function") toggleOffcanvas();
                    }}
                    aria-label="Open menu"
                  >
                    Menu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Burger toggle */}
        <button
          ref={burgerRef}
          className="js-burger-toggle-menu burger-toggle-menu"
          aria-expanded={offcanvasOpen ? "true" : "false"}
          aria-label="Toggle site menu"
          onClick={() => {
            if (typeof toggleOffcanvas === "function") toggleOffcanvas();
          }}
          style={{ display: "none" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </>
  );
}
