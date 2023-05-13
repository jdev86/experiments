import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoModule } from '../crypto/module';
import { PokemonModule } from '../pokemon/module';
import { ResumeModule } from '../resume/module';
import { WeatherModule } from '../weather/module';

@Module({
  imports: [PokemonModule, WeatherModule, CryptoModule, ResumeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
