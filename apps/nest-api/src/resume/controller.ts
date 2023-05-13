/* eslint-disable class-methods-use-this */
import { Controller, Get, Res } from '@nestjs/common';
import { createReadStream } from 'fs';

@Controller()
export class ResumeController {

  @Get('resume')
  async getPDF(@Res() res): Promise<unknown> {
    const file = createReadStream(process.cwd() + '/apps/nest-api/src/resume/resume.pdf');
    return file.pipe(res);
  }
}


