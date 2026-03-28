import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Not only is he a skilled developer, but Dcrony also communicates clearly and always meets deadlines. Our project ran smoothly from start to finish.",
      author: "Jane Smith",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      text: "I was amazed at the quality and speed of delivery. Fantastic work! The attention to detail and code quality exceeded my expectations.",
      author: "Michael Lee",
      role: "Product Manager, Digital Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      text: "Dcrony is highly creative, reliable, and detail-oriented. He transformed our vision into a seamless and beautiful web experience. Highly recommended!",
      author: "Sarah Johnson",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="testimonials">
      <div className="section-header">
        <h2 className="section-title">My Happy Clients</h2>
        <p className="section-subtitle">What people say about working with me</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.author} />
              <div className="testimonial-info">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;