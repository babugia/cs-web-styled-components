import React from 'react';
import Layout from './config/Layout';
import Events from './Events/Events';
import Matches from './Matches/Matches';
import Teams from './Teams/Teams';
import Stats from './Stats/Stats';
import Feed from './Feed/Feed';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/events'>
            <Events />
          </Route>
          <Route path='/matches'>
            <Matches />
          </Route>
          <Route path='/teams'>
            <Teams />
          </Route>
          <Route path='/stats'>
            <Stats />
          </Route>
          <Route path='/'>
            <Feed />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
