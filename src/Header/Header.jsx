import React, { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from './PrimaryMenu/Logo';
import LoginButton from './PrimaryMenu/LoginButton';
import Menu from './PrimaryMenu/Menu';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  background: #6639a6;
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

const Header = () => {
  const shared = useSelector(state => state.shared);
  const { selectedMenu } = shared;

  return (
    <Container>
      <Logo />
      <PrimaryMenu selectedMenu={selectedMenu} />
      <MobileMenu />
    </Container>
  );
};

export default memo(Header);

// TODO: think about create a new branch to do an connected component as HOC,
// instead useSelector and useDispatch
