/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const AboutUsPage = styled.div`
  padding: 20px;
`;

const AboutUsContent = styled.div`
  margin-top: 20px;
`;

const Heading = styled.h3`
  margin-top: 20px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const AboutUs = () => {
  return (
    <AboutUsPage>
      <h2>About Us</h2>
      <AboutUsContent>
        <Paragraph>Welcome to the Cybersecurity Club! Our mission is to educate and empower individuals with the knowledge and skills necessary to protect themselves and others in the digital world.</Paragraph>
        <Paragraph>We offer a variety of resources, events, and opportunities for members to learn about cybersecurity, network with professionals, and participate in hands-on activities.</Paragraph>
        <Heading>Our Goals</Heading>
        <List>
          <ListItem>Promote awareness and understanding of cybersecurity issues.</ListItem>
          <ListItem>Provide training and resources to develop cybersecurity skills.</ListItem>
          <ListItem>Foster a community of cybersecurity enthusiasts and professionals.</ListItem>
        </List>
        <Heading>Meet Our Team</Heading>
        <Paragraph>Our team is comprised of dedicated professionals and enthusiasts who are passionate about cybersecurity. We are committed to providing valuable experiences and opportunities for our members.</Paragraph>
      </AboutUsContent>
    </AboutUsPage>
  );
};

export default AboutUs;
