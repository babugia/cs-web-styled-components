import React, { memo } from 'react';
import styled from 'styled-components';
import { routerPathMapper } from './headerUtils';
import { Link } from 'react-router-dom';

const MenuItem = props => {
  const { key, selected, children, className } = props;

  return (
    <Link
      key={key}
      to={routerPathMapper[children]}
      className={className}
      selected={selected}
    >
      {children}
    </Link>
  );
};

const StyledMenuItem = styled(MenuItem)`
  padding-right: 1rem;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding: 0 2rem;
  text-decoration: none;
  position: relative;
  width: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 1rem;
  }

  :hover {
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

export default memo(StyledMenuItem);
