import React, { memo } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Content = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
`;

const Layout = props => (
  <div>
    <Header />
    <Content>{props.children}</Content>
  </div>
);

export default memo(Layout);
