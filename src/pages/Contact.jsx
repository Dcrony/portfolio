import { useState } from "react";
import emailjs from "emailjs-com";
import "../css/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill in all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("⚠️ Please enter a valid email address.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_17v4l2q", 
        "template_5d2lxtk", 
        formData,
        "P53JFFmdEw4keEtVO" 
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        {/* ===== Heading ===== */}
        <div className="section-heading text-center">
          <h2 className="section-title">Get In Touch</h2>
          <img
            src="src/images/divider.png"
            alt="divider"
            className="divider-img"
          />
        </div>

        {/* ===== Contact Content ===== */}
        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
            <span id="status" className="form-status">
              {status}
            </span>
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
