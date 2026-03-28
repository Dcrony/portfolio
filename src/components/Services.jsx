import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '</>',
      title: 'Full-Stack Development',
      description: 'Complete MERN stack applications with secure authentication and scalable architecture.',
      tags: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
      large: true
    },
    {
      icon: '◐',
      title: 'Responsive Design',
      description: 'Mobile-first websites that look stunning on every device.',
      tags: ['Tailwind CSS', 'Mobile Optimization']
    },
    {
      icon: '◈',
      title: 'API Development',
      description: 'Robust RESTful APIs with comprehensive documentation.',
      tags: ['JWT Auth', 'Validation', 'Documentation']
    },
    {
      icon: '◉',
      title: 'Security Implementation',
      description: 'Secure authentication with email OTP and data protection measures.',
      tags: ['JWT Tokens', 'Email OTP', 'Encryption'],
      wide: true
    }
  ];

  return (
    <section id="services">
      <div className="section-header">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">Comprehensive web development solutions</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-card ${service.large ? 'large' : ''} ${service.wide ? 'wide' : ''}`}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag, i) => (
                <span key={i} className="service-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;