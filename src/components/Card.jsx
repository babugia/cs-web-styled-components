import React, { memo } from 'react';
import styled from 'styled-components';

const Card = props => {
  const { children, className } = props;

  return <div className={className}>{children}</div>;
};

const StyledCard = styled(Card)`
  width: ${props => props.cardWidth || '25.625rem'};
  border-radius: 5px;
  margin-top: 3rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

export default memo(StyledCard);
