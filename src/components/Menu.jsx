/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import templateConfig from '../templateConfig';

const Menu = () => {
  return (
    <Nav aria-label="Primary navigation">
      <MenuList>
        {templateConfig.navigation.map((item) => (
          <MenuItem key={item.path}>
            <StyledLink to={item.path}>{item.label}</StyledLink>
          </MenuItem>
        ))}
      </MenuList>
    </Nav>
  );
};

export default Menu;

const Nav = styled.nav`
  background-color: #333;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 10px;
`;

const MenuItem = styled.li`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
