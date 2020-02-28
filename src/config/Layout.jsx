import React, { memo } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
`;

const Layout = props => (
  <div>
    <Header />
    <Content>{props.children}</Content>
  </div>
);

export default memo(Layout);

// TODO: search about display: grid,
