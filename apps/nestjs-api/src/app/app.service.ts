import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  // eslint-disable-next-line class-methods-use-this
  getData(): string {
    return 'This api is used for requesting pokemon';
  }
}

export default AppService;
