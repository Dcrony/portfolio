  import React, { useState, useRef } from 'react';
  import emailjs from '@emailjs/browser';

  const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);


      emailjs.sendForm(
        'service_17v4l2q',    // From EmailJS dashboard
        'template_5d2lxtk',   // From EmailJS dashboard
        form.current,
        'P53JFFmdEw4keEtVO'     // From EmailJS dashboard
      )
      .then((result) => {
        setStatus('SUCCESS');
        form.current.reset();
      })
      .catch((error) => {
        setStatus('ERROR');
        console.log(error.text);
      })
      .finally(() => {
        setLoading(false);
      });
    };

    return (
      <section className="contact" id="contact">
        <div className="contact-info">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>ibrahimabdulmajeed14@gmail.com</span>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+234 903 949 2387</span>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Abeokuta, Nigeria</span>
            </div>
          </div>
        </div>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Message" 
              required
            ></textarea>
          </div>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          
          {status === 'SUCCESS' && (
            <div className="form-status success">Thanks! Your message has been sent.</div>
          )}
          {status === 'ERROR' && (
            <div className="form-status error">Oops! Something went wrong.</div>
          )}
          
          <button 
            type="submit" 
            className="submit-btn" 
            disabled={loading || status === 'SUCCESS'}
          >
            {loading ? 'Sending...' : status === 'SUCCESS' ? 'Sent!' : 'Send Message'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </form>
      </section>
    );
  };

  export default Contact;
