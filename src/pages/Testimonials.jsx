import { useState, useEffect } from "react";
import "../css/testimonial.css"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Example Inc.",
    img: "src/assets/images/person_woman_1.jpg",
    message:
      "This service completely transformed our business. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    img: "src/assets/images/person_woman_1.jpg",
    message:
      "I was amazed at the quality and speed of delivery. Fantastic work!",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Developer",
    img: "src/assets/images/person_woman_1.jpg",
    message:
      "Professional, reliable, and extremely talented. Couldn’t ask for more.",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="section-title">My Happy Clients</h2>
      <div className="testimonial-wrapper">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={`testimonial-item ${
              index === current ? "active" : ""
            }`}
          >
            <div className="testimonial-inner-bg">
              <span className="quote">&ldquo;</span>
              <blockquote>{t.message}</blockquote>
            </div>
            <div className="testimonial-author-info">
              <img src={t.img} alt={t.name} />
              <h3>{t.name}</h3>
              <span className="position">{t.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
