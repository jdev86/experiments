import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: [] } {
    return { message: [] };
  }
}
