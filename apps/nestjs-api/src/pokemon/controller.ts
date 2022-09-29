/* eslint-disable class-methods-use-this */
import { Controller, Get, Param, Query } from '@nestjs/common';

import PokemonService from './service';

@Controller()
export default class PokemonController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('pokemon')
  getAll(@Query() query: { limit: number }): unknown {
    return this.pokemonService.getByLimit(query.limit);
  }

  @Get('pokemon/:name')
  getById(@Param('name') name: string): unknown {
    return this.pokemonService.getById(name);
  }
}
