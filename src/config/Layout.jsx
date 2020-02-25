import React, { memo } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Content = styled.div`
  margin: 5rem;
`;

const Layout = props => (
  <div>
    <Header />
    <Content>{props.children}</Content>
  </div>
);

export default memo(Layout);
