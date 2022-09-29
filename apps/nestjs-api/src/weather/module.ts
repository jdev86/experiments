import { Module } from '@nestjs/common';

import WeatherController from './controller';
import WeatherService from './service';

@Module({
  imports: [],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export default class WeatherModule {}
