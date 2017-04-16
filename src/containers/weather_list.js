import React, { Component } from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  renderWeather(cityData){
    const {name} = cityData.city;
    const temps = _.map(cityData.list.map((weather) => weather.main.temp), (temp) => temp - 273.15);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td className='col-xs-3'><GoogleMap lng={lon} lat={lat}></GoogleMap></td>
        <td className='col-xs-3'>
          <Chart data={temps} color='orange' units='C'></Chart>
        </td>
        <td className='col-xs-3'>
          <Chart data={pressures} color='green' units='hPa'></Chart>
        </td>
        <td className='col-xs-3'>
          <Chart data={humidities} color='black' units='%'></Chart>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th className='col-xs-3'>City</th>
            <th className='col-xs-3'>Temperature (Celsius)</th>
            <th className='col-xs-3'>Pressure (hPa)</th>
            <th className='col-xs-3'>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
