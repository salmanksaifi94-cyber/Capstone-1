import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero section-center">
      <div className="hero-copy">
        <h2>Stay Lit at LUMINA ✨</h2>
        <p>The ultimate Gen Z luxury experience. Neon-soaked rooms, seamless bookings, vibes on vibes. Manage your perfect stay from our ultra-modern dashboard—because you deserve the glow-up.</p>
        <a href="#booking" className="btn btn-primary">✨ Glow Up Your Stay</a>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1501117716987-c8b71efca0a7?auto=format&fit=crop&w=900&q=80" alt="Luxury hotel lobby" />
      </div>
    </section>
  );
}

export default Hero;
