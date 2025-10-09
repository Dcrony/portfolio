import React from "react";
import "../css/service.css";

export default function Services() {
  return (
    <section className="services-section" id="services-section">
      <div className="container">
        {/* ===== Section Title ===== */}
        <div className="section-heading text-center">
          <h2 className="section-title">My Services</h2>
          <img
            src="src/assets/images/divider.png"
            alt="divider"
            className="divider-img"
          />
        </div>

        {/* ===== Services Grid ===== */}
        <div className="services-grid">
          {/* ===== Service Item ===== */}
          <div className="service-card">
            <div className="service-icon">
              <img
                src="src/assets/images/svg/004-percentage.svg"
                alt="Web Development"
              />
            </div>
            <h3>Web Development</h3>
            <p>
              I build fast, responsive, and modern websites using cutting-edge
              technologies to ensure scalability and high performance.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="src/assets/images/svg/001-options.svg"
                alt="Mobile App Development"
              />
            </div>
            <h3>Mobile App Development</h3>
            <p>
              Creating powerful and user-friendly mobile apps that deliver
              smooth experiences on both Android and iOS devices.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="src/assets/images/svg/006-goal.svg"
                alt="E-Commerce Solutions"
              />
            </div>
            <h3>E-Commerce Solutions</h3>
            <p>
              I develop full-featured e-commerce platforms with secure payments,
              easy management, and optimized user experiences.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="src/assets/images/svg/005-line-chart.svg"
                alt="SEO & Optimization"
              />
            </div>
            <h3>SEO & Optimization</h3>
            <p>
              Boosting website visibility and speed with proven SEO techniques
              and performance optimizations.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="src/assets/images/svg/002-chat.svg"
                alt="Secure Web Solutions"
              />
            </div>
            <h3>Secure Web Solutions</h3>
            <p>
              Implementing strong security protocols with authentication,
              encryption, and best backend practices.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="src/assets/images/svg/003-contact-book.svg"
                alt="Maintenance & Support"
              />
            </div>
            <h3>Maintenance & Support</h3>
            <p>
              Offering long-term support, monitoring, and regular updates to
              keep your project running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
