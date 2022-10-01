/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';

import axios from 'axios';
import { Coin, Params, Stat } from '../shared/types';

const BASE_URL = 'https://coinranking1.p.rapidapi.com'

const config = {

  headers: {
    'X-RapidAPI-Key': '8f89637800msh1c0ab6a3d2accefp1ec93ejsnfb9bc7fd006b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

@Injectable()
export class CryptoService {
  async getCoins(queryParams?: Partial<Params>): Promise<{ coins: { stats: Stat, coins: Coin[]} }> {

    const options = {...config, params: queryParams};

    const coins = await axios
      .get(`${BASE_URL}/coins`, options)
      .then((res) => res.data.data)
      .catch(() => `Error fetching coins.  Please try again.`);

    return {
      coins,
    };
  }

  async getCoinById(id: string): Promise<{ coin: Coin}> {
    const coin = await axios
      .get(`${BASE_URL}/coin/${id}`, config)
      .then((res) => res.data)
      .catch(() => `Error fetching coin data with id ${id}.  Verify and try again.`);

    return {
      coin,
    };
  }
}
