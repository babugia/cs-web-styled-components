import React, { memo, useState } from 'react';
import styled from 'styled-components';

const MobileContainer = styled.div`
  cursor: pointer;
  position: relative;
  padding: 0 30px;
  outline: none;

  @media (min-width: 670px) {
    display: none;
  }
`;

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

const PopupContainer = styled.div`
  position: fixed;
  right: 22px;
  left: 22px;
  top: 65px;

  background-color: red;
  perspective: 2000px;
`;

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(previousState => !previousState);
  return (
    <MobileContainer onClick={handleShowMenu}>
      <Icon>MOBILE</Icon>
      {showMenu && <PopupContainer> AJDKJANKDANDAS</PopupContainer>}
    </MobileContainer>
  );
};

export default memo(MobileMenu);
