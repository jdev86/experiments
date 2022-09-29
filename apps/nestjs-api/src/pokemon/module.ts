import { Module } from '@nestjs/common';

import PokemonController from './controller';
import PokemonService from './service';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export default class PokemonModule {}
