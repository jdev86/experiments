import { Module } from '@nestjs/common';

import { ResumeController } from './controller';

@Module({
  imports: [],
  controllers: [ResumeController],
})
export class ResumeModule {}
