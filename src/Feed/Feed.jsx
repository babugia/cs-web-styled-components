import React from 'react';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import CardContent from '../components/CardContent';
import { lastMatches } from '../mocks/feed';

const Feed = () => (
  <Card>
    <CardTitle>Last Matches</CardTitle>
    <CardContent displayValues={lastMatches} />
  </Card>
);

// TODO: CardContent component, receiving array with data, color 1, color 2 (colors optional)

export default Feed;
