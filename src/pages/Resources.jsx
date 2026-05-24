/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import resources from '../../content/resources.json';

const ResourcesPage = styled.div`
  padding: 20px;
`;

const ResourcesContent = styled.div`
  margin-top: 20px;

  h3 {
    margin-top: 20px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;

    ul {
      list-style-type: circle;
      padding-left: 20px;
    }
  }

  p,
  ul {
    margin-bottom: 20px;
  }
`;

const Resources = () => {
  return (
    <ResourcesPage>
      <h2>Resources</h2>
      <ResourcesContent>
        <p>{resources.intro}</p>
        <h3>Learning Paths</h3>
        <ul>
          {resources.learningPaths.map((topic) => (
            <li key={topic.name}>{topic.name}
              <p>{topic.description}</p>
              <ul>
                {topic.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ResourcesContent>
    </ResourcesPage>
  );
};

export default Resources;
