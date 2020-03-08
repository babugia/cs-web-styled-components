import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './Logo';
import LoginButton from './LoginButton';
import Menu from './Menu';
import { menuItemType } from './headerUtils';
import allActions from '../store/actions';

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
  const dispatch = useDispatch();

  const { selectedMenu } = shared;
  console.log({ selectedMenu });

  const handleChangeSelected = selected => {
    console.log({ selected });
    dispatch(allActions.setMenuSelected(selected));
  };

  return (
    <Container>
      <Logo />
      <Menu selected={selectedMenu} setSelectedMenu={handleChangeSelected} />
      <LoginButton />
    </Container>
  );
};

export default memo(Header);
