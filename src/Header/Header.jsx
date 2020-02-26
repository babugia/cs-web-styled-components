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
  width: 100%;
  height: 4.5rem;
  background: #6639a6;
`;

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuItemType.FEED);

  // TODO: think about save selectedMenu with redux or something,
  // to set when enter with url or when click in logo or login

  // TODO: create card component with style
  // box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  return (
    <Container>
      <Logo />
      <Menu selected={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Login />
    </Container>
  );
};

export default memo(Header);
