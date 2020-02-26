import React, { memo } from 'react';
import styled from 'styled-components';

const CardTitle = props => {
  const { children, className } = props;

  return <p className={className}>{children}</p>;
};

const StyledCardTitle = styled(CardTitle)`
  padding: 0.7rem;
  margin: 0;
  font-size: 20px;
`;

export default memo(StyledCardTitle);
