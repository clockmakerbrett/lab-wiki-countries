import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
    };
  }
  componentDidMount() {
    this.loadCountry();
  }
  componentDidUpdate(previousProps) {
    if (previousProps.code !== this.props.code) {
      this.loadCountry();
    }
  }
  loadCountry() {
    const code = this.props.code;
    const country = countries.find((country) => country.cca3 === code);
    console.log(country);
    this.setState({
      country,
    });
  }
  render() {
    return (
      <div className="col-7">
        {this.state.country && (
          <>
            <h1>{this.state.country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{this.state.country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {this.state.country.borders.map((code) => {
                        const country = countries.find(
                          (country) => country.cca3 === code
                        );
                        return (
                          <li key={code}>
                            <Link to={`/${code}`}>{country.name.common}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    );
  }
}
export default CountryDetails;
