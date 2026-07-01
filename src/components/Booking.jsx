import React, { useState } from 'react';
import '../styles/Booking.css';

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    requests: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.guestName || !formData.guestEmail || !formData.checkIn || !formData.checkOut) {
      alert('Please fill in all required fields.');
      return;
    }

    if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    const newBooking = {
      ...formData,
      id: Date.now()
    };
    
    setBookings(prev => [newBooking, ...prev]);
    setFormData({
      guestName: '',
      guestEmail: '',
      guestPhone: '',
      roomType: '',
      checkIn: '',
      checkOut: '',
      requests: ''
    });
  };

  return (
    <section id="booking" className="section-light container">
      <h3>Make Your Reservation</h3>
      <div className="section-grid booking-grid">
        <div>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Fill out the form below to instantly book your preferred room and receive a confirmation.</p>
          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Guest Name
              <input 
                type="text" 
                id="guestName" 
                placeholder="Enter your full name" 
                value={formData.guestName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email Address
              <input 
                type="email" 
                id="guestEmail" 
                placeholder="your.email@example.com" 
                value={formData.guestEmail}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number
              <input 
                type="tel" 
                id="guestPhone" 
                placeholder="+91 98765 43210" 
                value={formData.guestPhone}
                onChange={handleChange}
              />
            </label>
            <label>
              Select Room Type
              <select 
                id="roomType" 
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="">-- Choose a room --</option>
                <option value="Executive Suite">Executive Suite - ₹4,500/night</option>
                <option value="Deluxe Room">Deluxe Room - ₹3,200/night</option>
                <option value="Family Room">Family Room - ₹3,800/night</option>
              </select>
            </label>
            <label>
              Check-in Date
              <input 
                type="date" 
                id="checkIn" 
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Check-out Date
              <input 
                type="date" 
                id="checkOut" 
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Special Requests
              <textarea 
                id="requests" 
                placeholder="Let us know your preferences... (e.g., high floor, late checkout, special occasions)"
                value={formData.requests}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn btn-secondary">📅 Confirm Booking</button>
          </form>
        </div>
        <div className="booking-summary">
          <h4>📋 Recent Bookings</h4>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Latest reservations from our guests:</p>
          <ul className="booking-list">
            {bookings.slice(0, 5).map(booking => (
              <li key={booking.id} className="booking-item">
                <strong>{booking.guestName} — {booking.roomType}</strong>
                <span>{booking.checkIn} to {booking.checkOut}</span>
                <p>{booking.guestEmail}</p>
                <p>{booking.requests || 'No special requests'}</p>
              </li>
            ))}
            {bookings.length === 0 && (
              <li className="booking-item" style={{ color: 'var(--muted)' }}>No bookings yet. Be the first!</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Booking;
