import React from 'react';
import ReactDOM from 'react-dom';
import Events from './pages/Events'; // Adjust the import path as necessary

const eventsData = [
  { name: 'Cybersecurity 101', date: '01/07/2024', time: '10:00 AM', venue: 'Room A' },
  { name: 'Advanced Hacking', date: '15/07/2024', time: '02:00 PM', venue: 'Room B' },
  { name: 'Capture the Flag', date: '25/07/2024', time: '11:00 AM', venue: 'Room C' },
  // Add more events as needed
];

ReactDOM.render(<Events events={eventsData} />, document.getElementById('root'));
