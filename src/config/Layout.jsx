import React, { memo } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Content = styled.div`
  width: 100%;
  padding-bottom: 3rem;
`;

const Layout = props => (
  <div>
    <Header />
    <Content>{props.children}</Content>
  </div>
);

export default memo(Layout);

// TODO: search about display: grid,
