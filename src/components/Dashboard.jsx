import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    roomsOccupied: 0,
    roomsAvailable: 3
  });

  useEffect(() => {
    const updateStats = () => {
      const bookingList = document.querySelectorAll('.booking-item').length - 1;
      setStats(prev => ({
        ...prev,
        totalBookings: Math.max(0, bookingList)
      }));
    };

    const interval = setInterval(updateStats, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="section-center">
      <h3>Live Management Dashboard</h3>
      <p>Real-time insights into bookings, room availability, and occupancy rates.</p>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h4>📊 Total Bookings</h4>
          <p>{stats.totalBookings}</p>
        </div>
        <div className="dashboard-card">
          <h4>🛏️ Rooms Occupied</h4>
          <p>{stats.roomsOccupied}</p>
        </div>
        <div className="dashboard-card">
          <h4>✅ Available Rooms</h4>
          <p>{stats.roomsAvailable}</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
