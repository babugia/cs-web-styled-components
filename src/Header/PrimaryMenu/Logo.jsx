import React, { memo } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  width: 77px;
  align-self: center;
  margin-left: 1rem;
  font-size: 1.5em;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
  width: 181px;
`;

const FeedLink = ({ children, className }) => (
  <Link className={className} to='/'>
    {children}
  </Link>
);

const StyledLink = styled(FeedLink)`
  display: flex;
  text-decoration: none;
`;

const Logo = ({ className }) => {
  return (
    <Container>
      <StyledLink>
        <img className={className} src={logo} alt='cs' />
        <Title>CS GO</Title>
      </StyledLink>
    </Container>
  );
};

const StyledLogo = styled(Logo)`
  display: block;
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  width: 50px;
  height: 50px;
`;

export default memo(StyledLogo);
