import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h2>About Us</h2>
      <div className="about-us-content">
        <p>Welcome to the Cybersecurity Club! Our mission is to educate and empower individuals with the knowledge and skills necessary to protect themselves and others in the digital world.</p>
        <p>We offer a variety of resources, events, and opportunities for members to learn about cybersecurity, network with professionals, and participate in hands-on activities.</p>
        <h3>Our Goals</h3>
        <ul>
          <li>Promote awareness and understanding of cybersecurity issues.</li>
          <li>Provide training and resources to develop cybersecurity skills.</li>
          <li>Foster a community of cybersecurity enthusiasts and professionals.</li>
        </ul>
        <h3>Meet Our Team</h3>
        <p>Our team is comprised of dedicated professionals and enthusiasts who are passionate about cybersecurity. We are committed to providing valuable experiences and opportunities for our members.</p>
      </div>
    </div>
  );
};

export default AboutUs;
