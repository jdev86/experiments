/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';

import axios from 'axios';

const config = {
  headers:{
    "X-RapidAPI-Host"
: "weatherapi-com.p.rapidapi.com",
    "X-RapidAPI-Key": "8f89637800msh1c0ab6a3d2accefp1ec93ejsnfb9bc7fd006b"
  }
};

@Injectable()
export default class WeatherService {
  // eslint-disable-next-line class-methods-use-this
  async getWeatherByZip(zip: number): Promise<{ weather: { location: any, current: any, message?: any } }> {
    const weather = await axios
      .get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${zip}`, config)
      .then((res) => res.data)
      .catch(() => `Error fetching weather with zipcode ${zip}.  Verify and try again.`);

    return {
      weather,
    };
  }

  async getAstronomyByZip(zip: number): Promise<{ astronomy: { location: any, current: any, message?: any }}> {
    const astronomy = await axios
      .get(`https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${zip}`, config)
      .then((res) => res.data)
      .catch(() => `Error fetching astronomy data with zipcode ${zip}.  Verify and try again.`);

    return {
      astronomy,
    };
  }

  async getForecastByZip(zip: number): Promise<{ forecast: { location: any, current: any, message?: any }}> {
    const forecast = await axios
      .get(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${zip}`, config)
      .then((res) => res.data)
      .catch(() => `Error fetching forecast data with zipcode ${zip}.  Verify and try again.`);

    return {
      forecast,
    };
  }
}
