import React from 'react';
import Layout from './config/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './config/Routes';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
