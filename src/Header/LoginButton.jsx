import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginButton = props => {
  const { className } = props;
  return (
    <Link to='/login' className={className}>
      Login
    </Link>
  );
};

const StyledLoginButton = styled(LoginButton)`
  width: 75px;
  padding: 5px 0;
  color: white;
  margin-right: 1rem;
  border-radius: 5px;
  text-decoration: none;
  align-self: center;
  cursor: pointer;
  background: #6639a6;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  border: 2px white solid;
  outline: 0;

  :hover {
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.8);
    opacity: 0.8;
  }
`;

export default memo(StyledLoginButton);
