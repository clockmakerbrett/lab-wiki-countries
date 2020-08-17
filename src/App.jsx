import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CountryView from './views/CountryView';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/:code" component={CountryView} />
        <Route path="/" component={HomeView} />
      </Switch>
    </div>
  );
};

export default App;
