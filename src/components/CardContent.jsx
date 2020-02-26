import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${props =>
    props.isEven ? 'rgba(196, 196, 196, 0.25)' : 'rgba(196, 196, 196, 0.5)'};
`;

const StyledValue = styled.span`
  padding: 0.4rem;
`;

const CardContent = props => {
  const { className, displayValues } = props;

  return (
    <div className={className}>
      {displayValues.map((value, index) => (
        <StyledDiv isEven={index % 2 === 0}>
          <StyledValue>{value}</StyledValue>
        </StyledDiv>
      ))}
    </div>
  );
};

export default memo(CardContent);
