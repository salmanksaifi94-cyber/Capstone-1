import React from 'react';
import '../styles/Services.css';

const servicesData = [
  { icon: '🎯', title: '24/7 Concierge', desc: 'Expert assistance for reservations, local recommendations, and personalized travel planning.' },
  { icon: '🚀', title: 'Smart Check-in', desc: 'Streamlined digital arrival process with instant room allocation and mobile key access.' },
  { icon: '✨', title: 'Premium Housekeeping', desc: 'Impeccable daily cleaning, laundry service, and personalized amenity replenishment.' },
  { icon: '🍽️', title: 'Fine Dining', desc: 'In-room dining, multi-cuisine restaurants, and curated culinary experiences.' },
  { icon: '💪', title: 'Wellness Center', desc: 'State-of-the-art gym, spa services, and wellness programs for holistic relaxation.' },
  { icon: '🎉', title: 'Event Management', desc: 'Elegant venues and professional event planning for weddings, conferences, and celebrations.' }
];

function Services() {
  return (
    <section id="services" className="section-alt">
      <div className="container">
        <h3>World-Class Services</h3>
        <div className="features-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} className="feature-item">
              <h4>{service.icon} {service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
