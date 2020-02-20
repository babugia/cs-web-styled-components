import React, { memo } from 'react';
import styled from 'styled-components';
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

const Menu = styled.div`
  display: flex;
  align-items: center;
  max-width: 66%;
`;

const MenuItem = styled.a`
  padding-right: 1rem;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding: 0 2rem;
  position: relative;
  width: 100%;
  cursor: pointer;

  &:hover {
    color: #e5dfdf;
  }

  &:after {
    content: '';
    display: flex;
    position: relative;
    top: 1.45rem;
    border-bottom: ${props => (props.selected ? '3px' : '0')} white solid;
  }
`;

const LoginButton = styled.button`
  width: 75px;
  height: 45px;
  color: white;
  margin-right: 1rem;
  align-self: center;
  cursor: pointer;
  background: #6639a6;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  border: 2px white solid;
`;

const Header = () => {
  return (
    <Container>
      <FirstDiv>
        <StyledLogo />
        <Title>CS GO</Title>
      </FirstDiv>
      <Menu>
        <MenuItem>Feed</MenuItem>
        <MenuItem>Matches</MenuItem>
        <MenuItem selected>Events</MenuItem>
        <MenuItem>Teams</MenuItem>
        <MenuItem>Stats</MenuItem>
      </Menu>
      <LoginButton>Login</LoginButton>
    </Container>
  );
};

//TODO: Folder structure, create component for logo, menu, menu item and login

export default memo(Header);
