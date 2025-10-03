import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Example Inc.",
    message:
      "This service completely transformed our business. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    message:
      "I was amazed at the quality and speed of delivery. Fantastic work!",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Developer",
    message:
      "Professional, reliable, and extremely talented. Couldn’t ask for more.",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <h2 className="text-center">Testimonials</h2>
      <div className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={`testimonial-item ${
              index === current ? "active" : "hidden"
            }`}
          >
            <p className="message">"{t.message}"</p>
            <h4 className="name">{t.name}</h4>
            <span className="role">{t.role}</span>
          </div>
        ))}
      </div>

      {/* Manual controls */}
      <div className="controls">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
