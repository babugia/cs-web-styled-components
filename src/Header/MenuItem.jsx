import React, { memo } from 'react';
import styled from 'styled-components';
import { routerPathMapper } from './headerUtils';
import { Link } from 'react-router-dom';

const MenuItem = props => {
  const { key, selected, setSelectedMenu, children, className } = props;
  const handleOnClick = () => {
    const path = routerPathMapper[children];
    setSelectedMenu(children);
    <Link to={path} />;
    console.log({ path: routerPathMapper[children] });
  };

  // TODO: A TAG NEED HREF, SO FIX THIS LATER WITH REACT ROUTER
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      key={key}
      className={className}
      selected={selected}
      onClick={handleOnClick}
    >
      {children}
    </a>
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

export default memo(StyledMenuItem);
