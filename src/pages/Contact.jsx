function Contact() {
  return (
    <div className="unslate_co--section" id="contact-section">
      <div className="container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <span className="gsap-reveal">Get In Touch</span>
          </h2>
          <span className="gsap-reveal">
            <img src="src/assets/images/divider.png" alt="divider" width="76" />
          </span>
        </div>

        <div className="row justify-content-between">
          <div className="col-md-6">
            <form id="contactForm" method="POST">
              <div className="form-group row mb-0">
                <div className="col-lg-6 form-group gsap-reveal">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="col-lg-6 form-group gsap-reveal">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="col-lg-6 form-group gsap-reveal">
                  <label htmlFor="subject">Subject</label>
                  <input
                    name="subject"
                    id="subject"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-lg-6 form-group gsap-reveal">
                  <label htmlFor="message">Write your message...</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                    className="form-control"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-group row gsap-reveal">
                <div className="col-md-12 d-flex align-items-center">
                  <button
                    type="submit"
                    className="btn btn-outline-pill btn-custom-light mr-3"
                  >
                    Send Message
                  </button>
                  <span id="status"></span>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-4">
            <div className="contact-info-v1">
              <div className="gsap-reveal d-block">
                <span className="d-block contact-info-label">Email</span>
                <a
                  href="mailto:realdcrony001@gmail.com"
                  className="contact-info-val"
                >
                  realdcrony001@gmail.com
                </a>
              </div>
              <div className="gsap-reveal d-block">
                <span className="d-block contact-info-label">Phone</span>
                <a href="#" className="contact-info-val">
                  +234 903 949 2387
                </a>
              </div>
              <div className="gsap-reveal d-block">
                <span className="d-block contact-info-label">Address</span>
                <address className="contact-info-val">
                  Eruda. <br />
                  Kwara State, Nigeria.
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
