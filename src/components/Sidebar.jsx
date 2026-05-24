/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import templateConfig from '../templateConfig';

const SidebarContainer = styled.div`
  position: fixed;
  left: -200px; /* Hide the sidebar */
  top: 0;
  height: 100%;
  width: 200px;
  background-color: #333;
  transition: 0.3s; /* Smooth transition for hover effect */

  &:hover {
    left: 0;
  }
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarListItem = styled.li`
  margin: 20px 0;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <SidebarList>
          {templateConfig.navigation.map((item) => (
            <SidebarListItem key={item.path}>
              <SidebarLink to={item.path}>{item.label}</SidebarLink>
            </SidebarListItem>
          ))}
        </SidebarList>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
