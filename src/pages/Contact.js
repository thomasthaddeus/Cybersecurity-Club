/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const ContactPage = styled.div`
  padding: 20px;
`;

const ContactDetails = styled.div`
  margin-bottom: 20px;
`;

const ContactForm = styled.div`
  h3 {
    margin-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 10px;
  }
  input,
  textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #555;
    }
  }
`;

const Contact = () => {
  return (
    <ContactPage>
      <h2>Contact Us</h2>
      <ContactDetails>
        <p>If you have any questions or need more information, please feel free to contact us:</p>
        <p><strong>Email:</strong> info@cyberclub.org</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 1234 Cyber Lane, Tech City, TC 56789</p>
      </ContactDetails>
      <ContactForm>
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
      </ContactForm>
    </ContactPage>
  );
};

export default Contact;
