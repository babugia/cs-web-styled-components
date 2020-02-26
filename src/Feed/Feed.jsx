import React from 'react';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import CardContent from '../components/CardContent';
import { lastMatches, lastEvents } from '../mocks/feed';

const Feed = () => (
  <>
    <Card>
      <CardTitle>Last Matches</CardTitle>
      <CardContent displayValues={lastMatches} />
    </Card>
    <Card>
      <CardTitle>Last Events</CardTitle>
      <CardContent displayValues={lastEvents} />
    </Card>
  </>
);

// TODO: Create mocked feed to mapping over, instead create 4 Card component

export default Feed;
