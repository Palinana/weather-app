import React, { Component } from 'react';
import Welcome from './Welcome';
import Form from './Form';
import Weather from './Weather';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            temperature: undefined,
            location: '',
            description: '',
            forecast: [],
            unit: 'imperial', //imperial = fahrenheit, metric = celsius
            error: ''
        }
        this.toggleUnit = this.toggleUnit.bind(this);
    }

    getWeather = async (e) => {
        e.preventDefault();
        const zipcode = e.target.elements.zipcode.value;

        if(zipcode.length < 5 || zipcode.length > 5) {
            return this.setState({ error: 'Please check the entered zipcode!'})
        }

        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${this.props.weather_api_key}&units=${this.state.unit}`)
        .then(res => res.data)
        .catch(err => console.error(err))
        .then(data => {
            if(data !== undefined) {
                console.log('data', data)
                this.setState({
                    id: data.weather[0].id,
                    temperature: data.main.temp,
                    description: data.weather[0].main,
                    location: data.name
                })
            }
            else {
                return this.setState({ error: 'Please check the entered zipcode!'})
            }
        })

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&appid=${this.props.weather_api_key}&units=${this.state.unit}`)
        .then(res => res.data)
        .catch(err => console.error(err))
        .then(data => {
            if(data !== undefined) {
                let forecast = data.list.filter(day => {
                    let today = new Date();
                    let date = new Date(day.dt_txt);
                    let hour = date.getHours();
                    return date.getDate() !== today.getDate() && hour === 12
                })
                this.setState({
                    forecast: forecast
                })
            }
        })
        //clear input after sublition
        e.target.elements.zipcode.value = '';
        this.setState({ error: ''})
    
    }

    toggleUnit() {
        if (this.state.unit === 'imperial') {
            let convertTemp = this.convertUnits('imperial', this.state.temperature);
            let convertForecast = this.state.forecast.map(day => {
              let converted = this.convertUnits('imperial', day.main.temp);
              day.main.temp = converted;
              return day;
            })
            this.setState({
              temperature: convertTemp,
              unit: 'metric',
              forecast: convertForecast
            })
          }
      
          if (this.state.unit === 'metric') {
            let convertTemp = this.convertUnits('metric', this.state.temperature);
            let convertForecast = this.state.forecast.map(day => {
              let converted = this.convertUnits('metric', day.main.temp);
              day.main.temp = converted;
              return day
            })
            this.setState({
              temperature: convertTemp,
              unit: 'imperial',
              forecast: convertForecast
            })
        }
    }

    convertUnits(unit, temp) {
        //convert units to celsius
        if (unit === 'imperial') {
            let tempFahrenheit = temp;
            let tempCelsius = (tempFahrenheit - 32) * (5 / 9);
            return tempCelsius;
        } 
        else if (unit === 'metric') {
            //convert units to celsius to fahrenheit
            let tempCelsius = temp;
            let tempFahrenheit = (tempCelsius * (9/5)) + 32;
            return tempFahrenheit
        }
    }      

    render() {
        return (            
            <div className="main">
                {
                    this.state.forecast.length ? null
                    : <Welcome />
                }
                {
                    this.state.forecast.length ? 
                        <Weather 
                            id = {this.state.id}
                            location = {this.state.location} 
                            description = {this.state.description}
                            temperature = {this.state.temperature}
                            forecast = {this.state.forecast}
                            error = {this.state.error}
                            toggle = {this.toggleUnit}
                            unit = {this.state.unit}
                        /> : null
                }
                <Form
                    getWeather={this.getWeather} 
                />
                { 
                    this.state.error ? 
                        <div className="error-message">{this.state.error}</div> 
                        : null
                }
            </div>
        );
    }
}

export default Main;