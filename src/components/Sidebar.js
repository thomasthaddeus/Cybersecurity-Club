/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

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

const SidebarLink = styled.a`
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
          <SidebarListItem>
            <SidebarLink href="/">Home</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="/about-us">About Us</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="/events">Events</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="/resources">Resources</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="/join-us">Join Us</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="/contact">Contact</SidebarLink>
          </SidebarListItem>
        </SidebarList>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
