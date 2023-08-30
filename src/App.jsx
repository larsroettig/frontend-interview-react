import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import LiveChat from './routes/chat';
import HomePage from './routes/home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/livechat" component={LiveChat} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
