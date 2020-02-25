import React, { memo } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Title = styled.h1`
  align-self: center;
  margin-left: 1rem;
  font-size: 1.5em;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

const Logo = ({ className }) => (
  <Container>
    <img className={className} src={logo} alt='cs' />
    <Title>CS GO</Title>
  </Container>
);

const StyledLogo = styled(Logo)`
  display: block;
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  width: 50px;
  height: 50px;
`;

export default memo(StyledLogo);
