import React from 'react';
import NavBar from '../components/NavBar';
import CountryList from '../components/CountryList';

const HomeView = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <CountryList />
      </div>
    </div>
  );
};

export default HomeView;
