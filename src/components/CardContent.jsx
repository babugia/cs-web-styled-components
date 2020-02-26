import React, { memo } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${props =>
    props.color1 && props.color2
      ? props.isEven
        ? props.color1
        : props.color2
      : props.isEven
      ? 'rgba(196, 196, 196, 0.25)'
      : 'rgba(196, 196, 196, 0.5)'};
`;

const StyledValue = styled.span`
  padding: 0.4rem;
  color: black;
`;

// const Linkk = ({ children, className }) => (
//   <Link className={className}>{children}</Link>
// );

// const StyledLink = styled(Linkk)`
//   text-decoration: none;
// `;

const CardContent = props => {
  const { className, displayValues, color1, color2 } = props;

  return (
    <div className={className}>
      {displayValues.map((value, index) => (
        // <StyledLink key={index}>
        <StyledDiv
          key={index}
          isEven={index % 2 === 0}
          color1={color1}
          color2={color2}
        >
          <StyledValue>{value}</StyledValue>
        </StyledDiv>
        // </StyledLink>
      ))}
    </div>
  );
};

// FIXME: when to do this link, remove key from StyledDiv

export default memo(CardContent);
