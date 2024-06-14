import React from 'react';
import './JoinUs.css'; // Import the CSS file for styling

const JoinUs = () => {
  return (
    <div className="join-us-page">
      <h2>Join Us</h2>
      <div className="join-details">
        <p>Become a member of the Cybersecurity Club to access exclusive content, participate in events, and join our community of cybersecurity enthusiasts.</p>
      </div>
      <div className="join-form">
        <h3>Membership Form</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" />
          </label>
          <button type="submit">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
