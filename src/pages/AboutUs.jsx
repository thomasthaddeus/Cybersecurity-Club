/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import templateConfig from '../templateConfig';

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
        <Paragraph>Welcome to the {templateConfig.site.name}! {templateConfig.about.mission}</Paragraph>
        <Paragraph>{templateConfig.about.overview}</Paragraph>
        <Heading>Our Goals</Heading>
        <List>
          {templateConfig.about.goals.map((goal) => (
            <ListItem key={goal}>{goal}</ListItem>
          ))}
        </List>
        <Heading>Meet Our Team</Heading>
        <Paragraph>{templateConfig.about.team}</Paragraph>
      </AboutUsContent>
    </AboutUsPage>
  );
};

export default AboutUs;
