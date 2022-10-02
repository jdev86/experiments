import { CryptoModule } from '#crypto/module';
import { WeatherModule } from '#weather/module';
import { Module } from '@nestjs/common';
import { PokemonModule } from '../pokemon/module';
import { ResumeModule } from '../resume/module';

import AppController from './app.controller';
import AppService from './app.service';

@Module({
  imports: [PokemonModule, WeatherModule, CryptoModule, ResumeModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
