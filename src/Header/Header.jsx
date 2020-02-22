import React, { memo, useState } from 'react';
import styled from 'styled-components';
import LoginButton from './Login';
import Menu from './Menu';
import { menuItemType } from './headerUtils';
import logo from '../assets/logo.png';

const Title = styled.h1`
  align-self: center;
  margin-left: 1rem;
  font-size: 1.5em;
  color: #fff;
`;

const Logo = ({ className }) => (
  <img className={className} src={logo} alt='cs' />
);

const StyledLogo = styled(Logo)`
  display: block;
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  width: 50px;
  height: 50px;
`;

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

const FirstDiv = styled.div`
  display: flex;
  cursor: pointer;
`;

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuItemType.FEED);

  return (
    <Container>
      <FirstDiv>
        <StyledLogo />
        <Title>CS GO</Title>
      </FirstDiv>
      <Menu selected={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <LoginButton>Login</LoginButton>
    </Container>
  );
};

//TODO: Folder structure, create component for logo, menu, menu item and login

export default memo(Header);
