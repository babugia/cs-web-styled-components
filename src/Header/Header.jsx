import React, { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import LoginButton from './LoginButton';
import Menu from './Menu';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  background: #6639a6;
`;

const MobileContainer = styled.div`
  cursor: pointer;
  position: relative;
  padding: 0 30px;
  outline: none;

  @media (min-width: 670px) {
    display: none;
  }
`;

const PrimaryContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 670px) {
    display: none;
  }

  @media (max-width: 1000px) {
    justify-content: flex-start;
    padding-left: 2rem;
  }
`;

const PrimaryMenu = ({ selectedMenu }) => (
  <PrimaryContainer>
    <Menu selected={selectedMenu} />
    <LoginButton />
  </PrimaryContainer>
);

const Icon = styled.h2`
  font-size: 0;
  left: 10px;
  top: 33px;
  position: absolute;
  width: 24px;
  height: 3px;
  border-radius: 1px;
  background: white;
  &:after {
    content: '';
    top: 9px;
    position: absolute;
    width: 24px;
    height: 3px;
    border-radius: 1px;
    background: white;
  }

  &:before {
    content: '';
    top: -9px;
    position: absolute;
    width: 24px;
    height: 3px;
    border-radius: 1px;
    background: white;
  }
`;

const MobileMenu = ({ selectedMenu }) => (
  <MobileContainer>
    <Icon>MOBILE</Icon>
  </MobileContainer>
);

const Header = () => {
  const shared = useSelector(state => state.shared);
  const { selectedMenu } = shared;

  return (
    <Container>
      <Logo />
      <PrimaryMenu selectedMenu={selectedMenu} />
      <MobileMenu selectedMenu={selectedMenu} />
    </Container>
  );
};

export default memo(Header);

// TODO: think about create a new branch to do an connected component as HOC,
// instead useSelector and useDispatch
