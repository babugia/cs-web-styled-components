import Events from '../Events/Events';
import Matches from '../Matches/Matches';
import Teams from '../Teams/Teams';
import Stats from '../Stats/Stats';
import Feed from '../Feed/Feed';
import Login from '../Login/Login';

// https://reacttraining.com/react-router/web/example/route-config

export const routes = [
  {
    path: '/events',
    component: Events
  },
  {
    path: '/matches',
    component: Matches
  },
  {
    path: '/teams',
    component: Teams
  },
  {
    path: '/stats',
    component: Stats
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Feed
  }
];
