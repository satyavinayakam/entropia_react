import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Import all the app pages here
import Home from './pages/Home';
import Details from './pages/Details';

function App () {
  return <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/info/:id" component={Details} />
    </Switch>
  </Router>
};

export default App;