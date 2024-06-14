import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p>If you have any questions or need more information, please feel free to contact us:</p>
        <p><strong>Email:</strong> info@cyberclub.org</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 1234 Cyber Lane, Tech City, TC 56789</p>
      </div>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
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
            Message:
            <textarea name="message" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
