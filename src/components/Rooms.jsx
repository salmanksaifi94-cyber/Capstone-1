import React from 'react';
import '../styles/Rooms.css';

const roomsData = [
  {
    id: 1,
    icon: '🏆',
    title: 'Executive Suite',
    description: '45 sqm with private balcony, king bed, premium workspace, and exclusive lounge access.',
    price: '₹4,500/night'
  },
  {
    id: 2,
    icon: '⭐',
    title: 'Deluxe Room',
    description: 'Spacious suite with modern decor, panoramic city view, and premium minibar selection.',
    price: '₹3,200/night'
  },
  {
    id: 3,
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Room',
    description: 'Comfortable and spacious for up to 4 guests with connecting rooms and extra amenities.',
    price: '₹3,800/night'
  }
];

function Rooms() {
  return (
    <section id="rooms" className="section-light">
      <div className="container section-grid">
        <div>
          <h3>Our Luxury Rooms</h3>
          <p>Indulge in world-class comfort. Every room is meticulously designed with premium amenities, state-of-the-art technology, and personalized service.</p>
        </div>
        <div className="card-grid">
          {roomsData.map(room => (
            <article key={room.id} className="room-card">
              <h4>{room.icon} {room.title}</h4>
              <p>{room.description}</p>
              <span>{room.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
