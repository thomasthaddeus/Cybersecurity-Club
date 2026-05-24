/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import templateConfig from '../templateConfig';

const JoinUsPage = styled.div`
  padding: 20px;
`;

const JoinDetails = styled.div`
  margin-bottom: 20px;
`;

const JoinForm = styled.div`
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
  input {
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

const JoinUs = () => {
  return (
    <JoinUsPage>
      <h2>Join Us</h2>
      <JoinDetails>
        <p>{templateConfig.join.intro}</p>
      </JoinDetails>
      <JoinForm>
        <h3>{templateConfig.join.formTitle}</h3>
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
      </JoinForm>
    </JoinUsPage>
  );
};

export default JoinUs;
