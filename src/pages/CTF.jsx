/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import ctf from '../../content/ctf.json';

const CTFPage = styled.div`
  padding: 20px;
`;

const Section = styled.section`
  margin-top: 24px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`;

const Card = styled.article`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 16px;
  background: #fff;
`;

const Policy = styled.p`
  padding: 12px;
  border-left: 4px solid #333;
  background: #f5f5f5;
`;

const CTF = () => {
  return (
    <CTFPage>
      <h2>{ctf.teamName}</h2>
      <p>{ctf.intro}</p>

      <Section>
        <h3>Practice Platforms</h3>
        <CardGrid>
          {ctf.practicePlatforms.map((platform) => (
            <Card key={platform.name}>
              <h4>{platform.name}</h4>
              <p>{platform.level}</p>
              <a href={platform.url}>Visit platform</a>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <h3>Upcoming Competitions</h3>
        <CardGrid>
          {ctf.upcomingCompetitions.map((competition) => (
            <Card key={`${competition.name}-${competition.date}`}>
              <h4>{competition.name}</h4>
              <p>{competition.date}</p>
              <p>{competition.notes}</p>
              {competition.url && <a href={competition.url}>Competition details</a>}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <h3>Writeup Policy</h3>
        <Policy>{ctf.writeupPolicy}</Policy>
      </Section>
    </CTFPage>
  );
};

export default CTF;
