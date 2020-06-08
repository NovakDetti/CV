import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Homepage from './pages/homepage/homepage.component';

const App = () =>(
  <Router>
      <Switch>
        <Route path="/" exact component={() => <Homepage />} />
      </Switch>
    </Router>
);


export default App;
