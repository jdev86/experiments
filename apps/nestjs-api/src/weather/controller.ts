/* eslint-disable class-methods-use-this */
import { Controller, Get, Param, Query } from '@nestjs/common';

import { WeatherService } from './service';

@Controller()
export class WeatherController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly weatherService: WeatherService) {}

  @Get('weather/:zip')
  getWeatherByZip(@Param('zip') zip: number): unknown {
    return this.weatherService.getWeatherByZip(zip);
  }

  @Get('weather/astronomy/:zip')
  getAstronomyByZip(@Param('zip') zip:number): unknown {
    return this.weatherService.getAstronomyByZip(zip);
  }

  @Get('weather/forecast/:zip')
  getWeatherForecastByZip(@Param('zip') zip: number): unknown {
    return this.weatherService.getForecastByZip(zip);
  }
}
