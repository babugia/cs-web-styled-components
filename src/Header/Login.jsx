import React, { memo } from 'react';
import styled from 'styled-components';

const LoginButton = props => {
  const { className } = props;
  return <button className={className}>Login</button>;
};

const StyledLoginButton = styled(LoginButton)`
  width: 75px;
  height: 45px;
  color: white;
  margin-right: 1rem;
  align-self: center;
  cursor: pointer;
  background: #6639a6;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  border: 2px white solid;
  outline: none;
`;

export default memo(StyledLoginButton);
