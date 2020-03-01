import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import DashboardMap from './DashboardMap/DashboardMap';
import NotFound from './NotFound/NotFound';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/map" component={DashboardMap} />
            <Route path="/notfound" component={NotFound} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Routes;
