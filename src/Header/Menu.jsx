import React, { memo } from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { menuItemType } from './headerUtils';

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 66%;

  @media (max-width: 375px) {
    display: none;
  }
`;

const Menu = props => {
  const { selected, setSelectedMenu } = props;
  const items = Object.values(menuItemType);

  return (
    <Container>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          selected={item === selected}
          setSelectedMenu={setSelectedMenu}
        >
          {item}
        </MenuItem>
      ))}
    </Container>
  );
};

export default memo(Menu);

// TODO: think about site responsiveness..
