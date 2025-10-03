import React from "react";

export default function Services() {
  return (
    <div className="unslate_co--section" id="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center">
            <h2 className="heading-h2 divider">
              <span className="gsap-reveal">My Services</span>
            </h2>
            <span className="gsap-reveal">
              <img src="src/assets/images/divider.png" alt="divider" width="76" />
            </span>
          </div>
        </div>

        {/* Service Items */}
        <div className="row gutter-v3">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1 gsap-reveal">
              <div className="wrap-icon mb-3">
                <i className="icon-laptop"></i>
              </div>
              <h3>Web Development</h3>
              <p>
                Building fast, responsive, and modern websites using the latest
                web technologies to ensure scalability and performance.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1 gsap-reveal">
              <div className="wrap-icon mb-3">
                <i className="icon-mobile"></i>
              </div>
              <h3>Mobile App Development</h3>
              <p>
                Creating intuitive and powerful mobile applications that deliver
                seamless experiences on both Android and iOS platforms.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1 gsap-reveal">
              <div className="wrap-icon mb-3">
                <i className="icon-shopping-cart"></i>
              </div>
              <h3>E-Commerce Solutions</h3>
              <p>
                Developing complete e-commerce platforms with secure payments,
                user dashboards, and optimized shopping experiences.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1 gsap-reveal">
              <div className="wrap-icon mb-3">
                <i className="icon-line-chart"></i>
              </div>
              <h3>SEO &amp; Optimization</h3>
              <p>
                Improving website visibility and performance with modern SEO
                strategies and speed optimizations.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1 gsap-reveal">
              <div className="wrap-icon mb-3">
                <i className="icon-lock"></i>
              </div>
              <h3>Secure Web Solutions</h3>
              <p>
                Ensuring data protection and compliance by integrating secure
                authentication, encryption, and backend practices.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1 gsap-reveal">
              <div className="wrap-icon mb-3">
                <i className="icon-support"></i>
              </div>
              <h3>Maintenance &amp; Support</h3>
              <p>
                Offering continuous monitoring, updates, and technical support
                to keep your project running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
