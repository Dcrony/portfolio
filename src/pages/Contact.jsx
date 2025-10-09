import "../css/contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        {/* ===== Heading ===== */}
        <div className="section-heading text-center">
          <h2 className="section-title">Get In Touch</h2>
          <img
            src="src/assets/images/divider.png"
            alt="divider"
            className="divider-img"
          />
        </div>

        {/* ===== Contact Content ===== */}
        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form" id="contactForm" method="POST">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="form-control"
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
            <span id="status" className="form-status"></span>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <div>
              <span className="contact-label">Email</span>
              <a
                href="mailto:realdcrony001@gmail.com"
                className="contact-value"
              >
                realdcrony001@gmail.com
              </a>
            </div>

            <div>
              <span className="contact-label">Phone</span>
              <a href="#" className="contact-value">
                +234 903 949 2387
              </a>
            </div>

            <div>
              <span className="contact-label">Address</span>
              <address className="contact-value">
                Eruda, <br />
                Kwara State, Nigeria.
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
