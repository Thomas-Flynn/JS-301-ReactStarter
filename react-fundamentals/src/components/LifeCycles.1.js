import React, {Component} from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        weatherIcon: undefined, 
        input: '/* add your jsx here */',
        output: '',
        err: ''
    } ;
  }

  componentWillMount() {
    console.log("Component will mount");
    let weatherIcon;
    switch (this.props.weatherDescription) {
        case 'Cloudy':
            weatherIcon = 'day-cloudy'
            break;
        case 'Sunny':
            weatherIcon = 'day-sunny'
            break;
        case 'Rain':
            weatherIcon = 'day-cloud-rain'
            break;
        case 'Snow':
            weatherIcon = 'day-snow'
            break;
        default:
            weatherIcon = 'day-partly-cloudy'
    }
        this.setState({ weatherIcon });
  }

  render() {
    return (
      <div>
         <i className= { this.state.weatherIcon } />
         <p>{ this.props.weatherDescription }</p>
      </div>
    );
  }
}

Weather.defaultProps = { weatherDescription: 'unknown' };

export default Weather;