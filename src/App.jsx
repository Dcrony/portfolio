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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);

    // Initialize AOS for scroll animations #
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
      offset: -100,
    });

    if (offcanvasOpen) {
      document.body.classList.add("offcanvas");
    } else {
      document.body.classList.remove("offcanvas");
    }

    return () => {
      AOS.refresh();
      document.body.classList.remove("offcanvas");
    };
  }, [offcanvasOpen]);

  {
    /* Loader overlay & site loader elements kept so CSS animations still work */
  }
  // if (loading) {
  //   return (
  //     <div>
  //       <div id="unslate_co--overlayer"></div>
  //       <div className="site-loader-wrap">
  //         <div className="site-loader"></div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="unslate_co--site-wrap">
      <div className="unslate_co--site-inner">
        {/* Lines background  */}
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

        <Hero />

        <About />

        <Portfolio />

        <Services />

        <Skills />

        <Testimonials />

        <Contact />

        {/* End site-inner */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
