import React from 'react';
import './Events.css'; // Import the CSS file for styling

const Events = () => {
  return (
    <div className="events-page">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cybersecurity 101</td>
              <td>01/07/2024</td>
              <td>10:00 AM</td>
              <td>Room A</td>
            </tr>
            <tr>
              <td>Advanced Hacking</td>
              <td>15/07/2024</td>
              <td>02:00 PM</td>
              <td>Room B</td>
            </tr>
            <tr>
              <td>Capture the Flag</td>
              <td>25/07/2024</td>
              <td>11:00 AM</td>
              <td>Room C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
