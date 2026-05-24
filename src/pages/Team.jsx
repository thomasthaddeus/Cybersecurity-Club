/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import teamMembers from '../../content/team.json';

const TeamPage = styled.div`
  padding: 20px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 20px;
`;

const TeamCard = styled.article`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 16px;
  background: #fff;
`;

const Role = styled.p`
  margin: 6px 0;
  font-weight: bold;
`;

const Focus = styled.p`
  margin: 6px 0 12px;
  color: #555;
`;

const LinkList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
`;

const Team = () => {
  return (
    <TeamPage>
      <h2>Team</h2>
      <p>Introduce your club officers, mentors, and workshop leads here. Edit content/team.json to customize this page.</p>
      <TeamGrid>
        {teamMembers.map((member) => (
          <TeamCard key={`${member.name}-${member.role}`}>
            <h3>{member.name}</h3>
            <Role>{member.role}</Role>
            <Focus>{member.focus}</Focus>
            <p>{member.bio}</p>
            <LinkList>
              {member.links.github && <a href={member.links.github}>GitHub</a>}
              {member.links.linkedin && <a href={member.links.linkedin}>LinkedIn</a>}
            </LinkList>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamPage>
  );
};

export default Team;
