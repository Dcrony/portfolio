import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles (you can customize via your own CSS)
// import emailjs from "@emailjs/browser"; // optional (install @emailjs/browser) — or keep CDN


import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  // Global UI state: offcanvas/mobile menu
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  // Helper to toggle mobile menu from any component via props
  const toggleOffcanvas = () => setOffcanvasOpen((v) => !v);
  const closeOffcanvas = () => setOffcanvasOpen(false);

  useEffect(() => {
    // Initialize AOS for scroll animations (your HTML used data-aos attributes)
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
      offset: -100,
    });

    // Example EmailJS init (optional). Replace USER_ID with your actual EmailJS user ID
    // If you prefer the CDN approach (which you used previously), you can remove this.
    try {
      emailjs.init("P53JFFmdEw4keEtVO"); // <-- keep or replace with your user id
    } catch (e) {
      // If emailjs isn't installed, ignore — component Contact can fallback to CDN usage
      // console.warn("EmailJS init failed (maybe not installed).", e);
    }

    // Replicate "body.offcanvas" behavior from original site:
    // add/remove class to body when offcanvas changes (keeps overlay & scroll-lock behavior)
    if (offcanvasOpen) {
      document.body.classList.add("offcanvas");
    } else {
      document.body.classList.remove("offcanvas");
    }

    // If you have global JS you used before (ScrollMagic, TweenMax, Isotope, OwlCarousel),
    // initialize them in the specific components that rely on them (Portfolio, Testimonials).
    // We keep global init lightweight here.

    // Cleanup on unmount
    return () => {
      AOS.refresh();
      document.body.classList.remove("offcanvas");
    };
  }, [offcanvasOpen]);

  return (
    <div className="unslate_co--site-wrap">
      <div className="unslate_co--site-inner">
        {/* Lines background kept (your CSS handles its appearance) */}
        <div className="lines-wrap">
          <div className="lines-inner">
            <div className="lines"></div>
          </div>
        </div>

        {/* Navbar receives toggle props so it can open/close mobile menu */}
        <Navbar
          offcanvasOpen={offcanvasOpen}
          toggleOffcanvas={toggleOffcanvas}
          closeOffcanvas={closeOffcanvas}
        />

        {/* The page sections keep the original IDs and classes so your CSS works unchanged */}
        <Hero />

        <About />

        <Portfolio />

        <Services />

        <Skills />

        <Testimonials />

        <Journal />

        <Contact />

        {/* End site-inner */}
      </div>

      <Footer />

      {/* Loader overlay & site loader elements kept so CSS animations still work */}
      {/* <div id="unslate_co--overlayer"></div>
      <div className="site-loader-wrap">
        <div className="site-loader"></div>
      </div> */}
    </div>
  );
}

export default App;
