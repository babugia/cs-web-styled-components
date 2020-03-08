import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routerPathMapper } from '../Header/headerUtils';

const CardTitle = props => {
  const { children, className } = props;

  return (
    <Link to={routerPathMapper[children]} className={className}>
      {children}
    </Link>
  );
};

const StyledCardTitle = styled(CardTitle)`
  padding: 0.7rem;
  color: black;
  display: block;
  margin: 0;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export default memo(StyledCardTitle);
