import React from 'react';
import NavBar from '../components/NavBar';
import CountryList from '../components/CountryList';
import CountryDetails from '../components/CountryDetails';

const CountryView = (props) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <CountryList />
          <CountryDetails code={props.match.params.code} />
        </div>
      </div>
    </div>
  );
};
export default CountryView;
