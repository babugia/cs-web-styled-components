import React from 'react';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import CardContent from '../components/CardContent';
import { lastMatches, lastEvents, teams } from '../mocks/feed';

const Feed = () => (
  <>
    <Card cardWidth='20rem'>
      <CardTitle>Last Matches</CardTitle>
      <CardContent displayValues={lastMatches} />
    </Card>
    <Card cardWidth='20rem'>
      <CardTitle>Last Events</CardTitle>
      <CardContent displayValues={lastEvents} />
    </Card>
    <Card cardWidth='20rem'>
      <CardTitle>Teams</CardTitle>
      <CardContent displayValues={teams} />
    </Card>
  </>
);

// TODO: Create mocked feed to mapping over, instead create 4 Card component

export default Feed;
