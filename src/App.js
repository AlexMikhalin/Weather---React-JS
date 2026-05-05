import React from 'react';
import Info from './components/info';
import Weather from './components/weather';
import Form from './components/form';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    
    if(city) {
      if (!API_KEY) {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: "OpenWeather API key is missing"
        });
        return;
      }

      try {
        const api_url = await 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        if (!api_url.ok || !data.main || !data.sys) {
          this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            sunset: undefined,
            error: data.message ? data.message : "Weather data was not found"
          });
          return;
        }

        var sunset = data.sys.sunset;
        var date = new Date(sunset * 1000);
        var sunset_date = date.getHours()+ ":" + date.getMinutes() + ":" + date.getSeconds();

        this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
      } catch (error) {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: "Unable to load weather data"
        });
      }
  } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Enter the name of city"
    });
   } 
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 info">
        <Info />
          </div>
          <div className="col-sm-7 form">
          <Form weatherMethod={this.gettingWeather} />
        <Weather 
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        pressure={this.state.pressure}
        sunset={this.state.sunset}
        error={this.state.error}
        />
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
