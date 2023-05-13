/* eslint-disable class-methods-use-this */
import { Controller, Get, Param, Query, Res } from '@nestjs/common';

import { WeatherService } from './service';

@Controller('weather')
export class WeatherController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':zip')
  async getWeatherByZip(@Param('zip') zip: number): Promise<unknown> {
    return this.weatherService.getWeatherByZip(zip);
  }

  @Get('astronomy/:zip')
  getAstronomyByZip(@Param('zip') zip: number): Promise<unknown> {
    return this.weatherService.getAstronomyByZip(zip);
  }

  @Get('forecast/:zip')
  getWeatherForecastByZip(@Param('zip') zip: number): Promise<unknown> {
    return this.weatherService.getForecastByZip(zip);
  }
}
