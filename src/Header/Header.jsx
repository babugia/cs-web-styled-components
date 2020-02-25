import React, { memo, useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Login from './Login';
import Menu from './Menu';
import { menuItemType } from './headerUtils';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  background: #6639a6;
`;

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuItemType.FEED);

  return (
    <Container>
      <Logo />
      <Menu selected={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Login />
    </Container>
  );
};

//TODO: Folder structure, create component for logo, menu, menu item and login

export default memo(Header);
