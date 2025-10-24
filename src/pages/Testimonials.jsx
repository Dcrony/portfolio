import { useState, useEffect } from "react";
import "../css/testimonial.css";
import dividerImg from "../assets/images/divider.png";
import testimonial1 from "../assets/images/testimony1.png";
import testimonial2 from "../assets/images/person_woman_3.jpg";
import testimonial3 from "../assets/images/person_man_1.jpg";

const testimonials = [
  {
    id: 1,
    name: "Babatunde Hameed",
    role: "CEO, Babatech IT.",
    img: testimonial1,
    message:
      "Not only is he a skilled developer, but Dcrony also communicates clearly and always meets deadlines. Our project ran smoothly from start to finish.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    img: testimonial2,
    message:
      "I was amazed at the quality and speed of delivery. Fantastic work!",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Product Manager, Digital Agency",
    img: testimonial3,
    message:
      "Dcrony is highly creative, reliable, and detail-oriented. He transformed our vision into a seamless and beautiful web experience. Highly recommended!",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section" id="testimonial-section">
      <h2 className="section-title">My Happy Clients</h2>
      <img src={dividerImg} alt="divider" className="divider-img" />

      <div className="testimonial-slider">
        <div
          className="testimonial-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {testimonials.map((t) => (
            <div className="testimonial-item" key={t.id}>
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
