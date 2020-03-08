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

const Header = () => {
  const shared = useSelector(state => state.shared);
  const { selectedMenu } = shared;

  return (
    <Container>
      <Logo />
      <Menu selected={selectedMenu} />
      <LoginButton />
    </Container>
  );
};

export default memo(Header);

// TODO: think about create a new branch to do an connected component as HOC,
// instead useSelector and useDispatch
