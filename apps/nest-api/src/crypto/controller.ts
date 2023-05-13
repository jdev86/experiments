/* eslint-disable class-methods-use-this */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { Params } from '../shared/types';

import { CryptoService } from './service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('/coins')
  getCoins(@Query() query?: Params): Promise<unknown> {
    const queryParams = query;
    return this.cryptoService.getCoins(queryParams);
  }

  @Get('/coin/:id')
  getCoinById(@Param('id') id: string): unknown {
    return this.cryptoService.getCoinById(id)
  }
}
