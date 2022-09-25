/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';

import axios from 'axios';

@Injectable()
class PokemonService {
  // eslint-disable-next-line class-methods-use-this
  async getByLimit(limit: number): Promise<{ pokemon: string[] }> {
    const defaultLimit = 100;
    const pokemon = await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit || defaultLimit}`)
      .then((res) => res.data.results);
    return {
      pokemon,
    };
  }

  async getById(name: string): Promise<{ pokemon: unknown }> {
    const pokemon = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.data)
      .catch((e) => new Error(e));

    return {
      pokemon,
    };
  }
}

export default PokemonService;
