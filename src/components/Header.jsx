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
  margin-left: 5px;
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
  height: 5rem;
  background: #6639a6;
`;

const FirstDiv = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  max-width: 66%;
`;

const MenuItem = styled.a`
  padding-right: 1rem;
  color: white;
  position: relative;
  width: 100%;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    border-bottom: ${props => (props.selected ? '2px' : '0')} white solid;
  }
`;

// FIXME: border bottom only show when has something in the content..

const LoginContainer = styled.button``;

const Header = () => {
  return (
    <Container>
      <FirstDiv>
        <StyledLogo />
        <Title>CS GO</Title>
      </FirstDiv>
      <Menu>
        <MenuItem selected>Feed</MenuItem>
        <MenuItem>Matches</MenuItem>
      </Menu>
    </Container>
  );
};

export default memo(Header);
