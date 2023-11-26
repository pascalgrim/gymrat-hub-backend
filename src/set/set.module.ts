import { Module } from '@nestjs/common';
import { SetService } from './set.service';
import { SetController } from './set.controller';
import { ExerciseDayService } from 'src/exercise-day/exercise-day.service';

@Module({
  controllers: [SetController],
  providers: [SetService, ExerciseDayService],
})
export class SetModule {}
