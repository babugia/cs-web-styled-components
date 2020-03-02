import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import CardContent from '../components/CardContent';
import { feedData } from '../mocks/feed';

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
`;

const Feed = () => (
  <Container>
    {feedData.map(({ title, values }) => (
      <Card key={title} cardWidth='20rem'>
        <CardTitle>{title}</CardTitle>
        <CardContent displayValues={values} />
      </Card>
    ))}
  </Container>
);

export default Feed;
